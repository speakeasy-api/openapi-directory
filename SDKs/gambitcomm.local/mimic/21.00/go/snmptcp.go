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

type Snmptcp struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSnmptcp(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Snmptcp {
	return &Snmptcp{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ProtocolSnmptcpGetArgs - Show the agent's SNMPTCP argument structure
// Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *Snmptcp) ProtocolSnmptcpGetArgs(ctx context.Context, request operations.ProtocolSnmptcpGetArgsRequest) (*operations.ProtocolSnmptcpGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/args", request.PathParams)

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

	res := &operations.ProtocolSnmptcpGetArgsResponse{
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

			res.ProtocolSnmptcpGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpGetConfig - Show the agent's SNMPTCP configuration
// Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *Snmptcp) ProtocolSnmptcpGetConfig(ctx context.Context, request operations.ProtocolSnmptcpGetConfigRequest) (*operations.ProtocolSnmptcpGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/config", request.PathParams)

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

	res := &operations.ProtocolSnmptcpGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigSnmptcp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSNMPTCP = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpGetStatistics - Show the agent's SNMPTCP statistics
// Statistics of fields indicated in the headers
func (s *Snmptcp) ProtocolSnmptcpGetStatistics(ctx context.Context, request operations.ProtocolSnmptcpGetStatisticsRequest) (*operations.ProtocolSnmptcpGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/statistics", request.PathParams)

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

	res := &operations.ProtocolSnmptcpGetStatisticsResponse{
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

			res.ProtocolSnmptcpGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpGetStatsHdr - Show the SNMPTCP statistics headers
// The headers of statistics fields
func (s *Snmptcp) ProtocolSnmptcpGetStatsHdr(ctx context.Context) (*operations.ProtocolSnmptcpGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/snmptcp/get/stats_hdr"

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

	res := &operations.ProtocolSnmptcpGetStatsHdrResponse{
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

			res.ProtocolSnmptcpGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpGetTrace - Show the agent's SNMPTCP traffic tracing
// Trace 1 means enabled, 0 means not
func (s *Snmptcp) ProtocolSnmptcpGetTrace(ctx context.Context, request operations.ProtocolSnmptcpGetTraceRequest) (*operations.ProtocolSnmptcpGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/trace", request.PathParams)

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

	res := &operations.ProtocolSnmptcpGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigSnmptcp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSNMPTCP = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
// By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
func (s *Snmptcp) ProtocolSnmptcpIpaliasDisable(ctx context.Context, request operations.ProtocolSnmptcpIpaliasDisableRequest) (*operations.ProtocolSnmptcpIpaliasDisableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/disable/{ipaddress}/{port}", request.PathParams)

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

	res := &operations.ProtocolSnmptcpIpaliasDisableResponse{
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
			res.ProtocolSnmptcpIpaliasDisable200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
// By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
func (s *Snmptcp) ProtocolSnmptcpIpaliasEnable(ctx context.Context, request operations.ProtocolSnmptcpIpaliasEnableRequest) (*operations.ProtocolSnmptcpIpaliasEnableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/enable/{ipaddress}/{port}", request.PathParams)

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

	res := &operations.ProtocolSnmptcpIpaliasEnableResponse{
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
			res.ProtocolSnmptcpIpaliasEnable200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
// By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
func (s *Snmptcp) ProtocolSnmptcpIpaliasIsenabled(ctx context.Context, request operations.ProtocolSnmptcpIpaliasIsenabledRequest) (*operations.ProtocolSnmptcpIpaliasIsenabledResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/isenabled/{ipaddress}/{port}", request.PathParams)

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

	res := &operations.ProtocolSnmptcpIpaliasIsenabledResponse{
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
			res.ProtocolSnmptcpIpaliasIsenabled200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpIpaliasList - List all IP aliases on the agent and the simulator host
// By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
func (s *Snmptcp) ProtocolSnmptcpIpaliasList(ctx context.Context, request operations.ProtocolSnmptcpIpaliasListRequest) (*operations.ProtocolSnmptcpIpaliasListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/list", request.PathParams)

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

	res := &operations.ProtocolSnmptcpIpaliasListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.IPAlias
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IPAliases = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpSetConfig - Set the agent's SNMPTCP configuration
// Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *Snmptcp) ProtocolSnmptcpSetConfig(ctx context.Context, request operations.ProtocolSnmptcpSetConfigRequest) (*operations.ProtocolSnmptcpSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/config/{argument}/{value}", request.PathParams)

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

	res := &operations.ProtocolSnmptcpSetConfigResponse{
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
			res.ProtocolSnmptcpSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolSnmptcpSetTrace - Set the agent's SNMPTCP traffic tracing
// 1 to enable, 0 to disable
func (s *Snmptcp) ProtocolSnmptcpSetTrace(ctx context.Context, request operations.ProtocolSnmptcpSetTraceRequest) (*operations.ProtocolSnmptcpSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/trace/{enableOrNot}", request.PathParams)

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

	res := &operations.ProtocolSnmptcpSetTraceResponse{
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
			res.ProtocolSnmptcpSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}
