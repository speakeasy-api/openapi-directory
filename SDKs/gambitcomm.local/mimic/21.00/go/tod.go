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

type Tod struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTod(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Tod {
	return &Tod{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ProtocolTodGetArgs - Show the agent's TOD argument structure
// Agent's TOD configuration
func (s *Tod) ProtocolTodGetArgs(ctx context.Context, request operations.ProtocolTodGetArgsRequest) (*operations.ProtocolTodGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/args", request.PathParams)

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

	res := &operations.ProtocolTodGetArgsResponse{
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

			res.ProtocolTodGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodGetConfig - Show the agent's TOD configuration
// Agent's TOD configuration
func (s *Tod) ProtocolTodGetConfig(ctx context.Context, request operations.ProtocolTodGetConfigRequest) (*operations.ProtocolTodGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/config", request.PathParams)

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

	res := &operations.ProtocolTodGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigTod
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigTOD = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodGetStatistics - Show the agent's TOD statistics
// Statistics of fields indicated in the headers
func (s *Tod) ProtocolTodGetStatistics(ctx context.Context, request operations.ProtocolTodGetStatisticsRequest) (*operations.ProtocolTodGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/statistics", request.PathParams)

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

	res := &operations.ProtocolTodGetStatisticsResponse{
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

			res.ProtocolTodGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodGetStatsHdr - Show the TOD statistics headers
// The headers of statistics fields
func (s *Tod) ProtocolTodGetStatsHdr(ctx context.Context) (*operations.ProtocolTodGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/tod/get/stats_hdr"

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

	res := &operations.ProtocolTodGetStatsHdrResponse{
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

			res.ProtocolTodGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodGetTrace - Show the agent's TOD traffic tracing
// Trace 1 means enabled, 0 means not
func (s *Tod) ProtocolTodGetTrace(ctx context.Context, request operations.ProtocolTodGetTraceRequest) (*operations.ProtocolTodGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/trace", request.PathParams)

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

	res := &operations.ProtocolTodGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigTod
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigTOD = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodGettime - Retrieve TOD time
// Retrive time from server
func (s *Tod) ProtocolTodGettime(ctx context.Context, request operations.ProtocolTodGettimeRequest) (*operations.ProtocolTodGettimeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/gettime/server/{serverAddr}/port/{portNum}/script/{scriptName}/timeout/{timeSec}/retries/{numRetries}", request.PathParams)

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

	res := &operations.ProtocolTodGettimeResponse{
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

			res.ProtocolTodGettime200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodSetConfig - Set the agent's TOD configuration
// Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *Tod) ProtocolTodSetConfig(ctx context.Context, request operations.ProtocolTodSetConfigRequest) (*operations.ProtocolTodSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/set/config/{argument}/{value}", request.PathParams)

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

	res := &operations.ProtocolTodSetConfigResponse{
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
			res.ProtocolTodSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTodSetTrace - Set the agent's TOD traffic tracing
// 1 to enable, 0 to disable
func (s *Tod) ProtocolTodSetTrace(ctx context.Context, request operations.ProtocolTodSetTraceRequest) (*operations.ProtocolTodSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/set/trace/{enableOrNot}", request.PathParams)

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

	res := &operations.ProtocolTodSetTraceResponse{
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
			res.ProtocolTodSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}
