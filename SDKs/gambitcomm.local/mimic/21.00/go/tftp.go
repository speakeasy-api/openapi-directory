package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type Tftp struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTftp(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Tftp {
	return &Tftp{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ProtocolTftpGetArgs - Show the agent's TFTP argument structure
// Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *Tftp) ProtocolTftpGetArgs(ctx context.Context, request operations.ProtocolTftpGetArgsRequest) (*operations.ProtocolTftpGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/args", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpGetArgsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTftpGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpGetConfig - Show the agent's TFTP configuration
// Agent's TFTP configuration
func (s *Tftp) ProtocolTftpGetConfig(ctx context.Context, request operations.ProtocolTftpGetConfigRequest) (*operations.ProtocolTftpGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigTftp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigTFTP = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpGetStatistics - Show the agent's TFTP statistics
// Statistics of fields indicated in the headers
func (s *Tftp) ProtocolTftpGetStatistics(ctx context.Context, request operations.ProtocolTftpGetStatisticsRequest) (*operations.ProtocolTftpGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/statistics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpGetStatisticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTftpGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpGetStatsHdr - Show the TFTP statistics headers
// The headers of statistics fields
func (s *Tftp) ProtocolTftpGetStatsHdr(ctx context.Context) (*operations.ProtocolTftpGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/tftp/get/stats_hdr"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpGetStatsHdrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTftpGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpGetTrace - Show the agent's TFTP traffic tracing
// Trace 1 means enabled, 0 means not
func (s *Tftp) ProtocolTftpGetTrace(ctx context.Context, request operations.ProtocolTftpGetTraceRequest) (*operations.ProtocolTftpGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/trace", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigTftp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigTFTP = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionGetParameter - Show a parameter of a TFTP sesssion
// Parameter is server , port , or dstfile
func (s *Tftp) ProtocolTftpSessionGetParameter(ctx context.Context, request operations.ProtocolTftpSessionGetParameterRequest) (*operations.ProtocolTftpSessionGetParameterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/get/{parameter}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionGetParameterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSessionGetParameter200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionRead - Create a read session to download srcfile from server
// Session ID is returned
func (s *Tftp) ProtocolTftpSessionRead(ctx context.Context, request operations.ProtocolTftpSessionReadRequest) (*operations.ProtocolTftpSessionReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/read/server/{srcfile}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTftpSessionRead200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionSetParameter - Set a parameter of a TFTP sesssion
// Parameter is server , port , or dstfile
func (s *Tftp) ProtocolTftpSessionSetParameter(ctx context.Context, request operations.ProtocolTftpSessionSetParameterRequest) (*operations.ProtocolTftpSessionSetParameterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/set/{parameter}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionSetParameterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSessionSetParameter200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionStart - Start a TFTP sesssion
// Start uploading or downloading the file
func (s *Tftp) ProtocolTftpSessionStart(ctx context.Context, request operations.ProtocolTftpSessionStartRequest) (*operations.ProtocolTftpSessionStartResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/start", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionStartResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSessionStart200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionStatus - Check a TFTP sesssion's status
// Status includes running state, bytes transfered, and time elapsed
func (s *Tftp) ProtocolTftpSessionStatus(ctx context.Context, request operations.ProtocolTftpSessionStatusRequest) (*operations.ProtocolTftpSessionStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/status", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSessionStatus200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionStop - Stop a TFTP sesssion
// Stop uploading or downloading the file
func (s *Tftp) ProtocolTftpSessionStop(ctx context.Context, request operations.ProtocolTftpSessionStopRequest) (*operations.ProtocolTftpSessionStopResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/stop", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionStopResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSessionStop200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSessionWrite - Create a read session to upload srcfile to server
// Session ID is returned
func (s *Tftp) ProtocolTftpSessionWrite(ctx context.Context, request operations.ProtocolTftpSessionWriteRequest) (*operations.ProtocolTftpSessionWriteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/write/server/{srcfile}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSessionWriteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolTftpSessionWrite200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSetConfig - Set the agent's TFTP configuration
// Agent's TFTP configuration
func (s *Tftp) ProtocolTftpSetConfig(ctx context.Context, request operations.ProtocolTftpSetConfigRequest) (*operations.ProtocolTftpSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/config/{argument}/{value}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTftpSetTrace - Set the agent's TFTP traffic tracing
// 1 to enable, 0 to disable
func (s *Tftp) ProtocolTftpSetTrace(ctx context.Context, request operations.ProtocolTftpSetTraceRequest) (*operations.ProtocolTftpSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/trace/{enableOrNot}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProtocolTftpSetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.ProtocolTftpSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}
