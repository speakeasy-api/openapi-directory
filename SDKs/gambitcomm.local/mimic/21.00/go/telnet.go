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

type Telnet struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTelnet(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Telnet {
	return &Telnet{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ProtocolTelnetConnectionLogon - Changes the connection's current logon.
// Logon change allows (hidden) commands for a different access mode to run.
func (s *Telnet) ProtocolTelnetConnectionLogon(ctx context.Context, request operations.ProtocolTelnetConnectionLogonRequest) (*operations.ProtocolTelnetConnectionLogonResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/logon/{connectionID}/{user}/{password}", request.PathParams)

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

	res := &operations.ProtocolTelnetConnectionLogonResponse{
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

			res.ProtocolTelnetConnectionLogon200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetConnectionRequest - Executes the command asynchronously .
// Equivalent of the command typed in by the user.
func (s *Telnet) ProtocolTelnetConnectionRequest(ctx context.Context, request operations.ProtocolTelnetConnectionRequestRequest) (*operations.ProtocolTelnetConnectionRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/request/{connectionID}/{command}", request.PathParams)

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

	res := &operations.ProtocolTelnetConnectionRequestResponse{
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

			res.ProtocolTelnetConnectionRequest200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetConnectionSignal - Triggers the asynchronous signal event with the specified signal name
// Signal name is either connect or idle
func (s *Telnet) ProtocolTelnetConnectionSignal(ctx context.Context, request operations.ProtocolTelnetConnectionSignalRequest) (*operations.ProtocolTelnetConnectionSignalResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/signal/{connectionID}/{signalName}", request.PathParams)

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

	res := &operations.ProtocolTelnetConnectionSignalResponse{
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

			res.ProtocolTelnetConnectionSignal200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetGetArgs - Show the agent's TELNET argument structure
// Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *Telnet) ProtocolTelnetGetArgs(ctx context.Context, request operations.ProtocolTelnetGetArgsRequest) (*operations.ProtocolTelnetGetArgsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/args", request.PathParams)

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

	res := &operations.ProtocolTelnetGetArgsResponse{
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

			res.ProtocolTelnetGetArgs200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetGetConfig - Show the agent's TELNET configuration
// Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *Telnet) ProtocolTelnetGetConfig(ctx context.Context, request operations.ProtocolTelnetGetConfigRequest) (*operations.ProtocolTelnetGetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/config", request.PathParams)

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

	res := &operations.ProtocolTelnetGetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigTelnet
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigTELNET = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetGetStatistics - Show the agent's TELNET statistics
// Statistics of fields indicated in the headers
func (s *Telnet) ProtocolTelnetGetStatistics(ctx context.Context, request operations.ProtocolTelnetGetStatisticsRequest) (*operations.ProtocolTelnetGetStatisticsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/statistics", request.PathParams)

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

	res := &operations.ProtocolTelnetGetStatisticsResponse{
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

			res.ProtocolTelnetGetStatistics200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetGetStatsHdr - Show the TELNET statistics headers
// The headers of statistics fields
func (s *Telnet) ProtocolTelnetGetStatsHdr(ctx context.Context) (*operations.ProtocolTelnetGetStatsHdrResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mimic/protocol/msg/telnet/get/stats_hdr"

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

	res := &operations.ProtocolTelnetGetStatsHdrResponse{
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

			res.ProtocolTelnetGetStatsHdr200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetGetTrace - Show the agent's TELNET traffic tracing
// Trace 1 means enabled, 0 means not
func (s *Telnet) ProtocolTelnetGetTrace(ctx context.Context, request operations.ProtocolTelnetGetTraceRequest) (*operations.ProtocolTelnetGetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/trace", request.PathParams)

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

	res := &operations.ProtocolTelnetGetTraceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigTelnet
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigTELNET = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
// By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
func (s *Telnet) ProtocolTelnetIpaliasDisable(ctx context.Context, request operations.ProtocolTelnetIpaliasDisableRequest) (*operations.ProtocolTelnetIpaliasDisableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/disable/{ipaddress}/{port}", request.PathParams)

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

	res := &operations.ProtocolTelnetIpaliasDisableResponse{
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
			res.ProtocolTelnetIpaliasDisable200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
// By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
func (s *Telnet) ProtocolTelnetIpaliasEnable(ctx context.Context, request operations.ProtocolTelnetIpaliasEnableRequest) (*operations.ProtocolTelnetIpaliasEnableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/enable/{ipaddress}/{port}", request.PathParams)

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

	res := &operations.ProtocolTelnetIpaliasEnableResponse{
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
			res.ProtocolTelnetIpaliasEnable200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
// By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
func (s *Telnet) ProtocolTelnetIpaliasIsenabled(ctx context.Context, request operations.ProtocolTelnetIpaliasIsenabledRequest) (*operations.ProtocolTelnetIpaliasIsenabledResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/isenabled/{ipaddress}/{port}", request.PathParams)

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

	res := &operations.ProtocolTelnetIpaliasIsenabledResponse{
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
			res.ProtocolTelnetIpaliasIsenabled200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetIpaliasList - List all IP aliases on the agent and the simulator host
// By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
func (s *Telnet) ProtocolTelnetIpaliasList(ctx context.Context, request operations.ProtocolTelnetIpaliasListRequest) (*operations.ProtocolTelnetIpaliasListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/list", request.PathParams)

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

	res := &operations.ProtocolTelnetIpaliasListResponse{
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

// ProtocolTelnetServerGetConnections - Show the agent's TELNET connections
// IDs of all connected connections
func (s *Telnet) ProtocolTelnetServerGetConnections(ctx context.Context, request operations.ProtocolTelnetServerGetConnectionsRequest) (*operations.ProtocolTelnetServerGetConnectionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/connections", request.PathParams)

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

	res := &operations.ProtocolTelnetServerGetConnectionsResponse{
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

			res.ProtocolTelnetServerGetConnections200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetServerGetKeymap - Show the agent's TELNET keymap file name
// Keymap file name
func (s *Telnet) ProtocolTelnetServerGetKeymap(ctx context.Context, request operations.ProtocolTelnetServerGetKeymapRequest) (*operations.ProtocolTelnetServerGetKeymapResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/keymap", request.PathParams)

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

	res := &operations.ProtocolTelnetServerGetKeymapResponse{
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

			res.ProtocolTelnetServerGetKeymap200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetServerGetRulesdb - Show the agent's TELNET rules db file name
// Rules db file name
func (s *Telnet) ProtocolTelnetServerGetRulesdb(ctx context.Context, request operations.ProtocolTelnetServerGetRulesdbRequest) (*operations.ProtocolTelnetServerGetRulesdbResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/rulesdb", request.PathParams)

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

	res := &operations.ProtocolTelnetServerGetRulesdbResponse{
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

			res.ProtocolTelnetServerGetRulesdb200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetServerGetState - Show the agent's TELNET server state
// Return 1 means accepting connections, 0 not
func (s *Telnet) ProtocolTelnetServerGetState(ctx context.Context, request operations.ProtocolTelnetServerGetStateRequest) (*operations.ProtocolTelnetServerGetStateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/state", request.PathParams)

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

	res := &operations.ProtocolTelnetServerGetStateResponse{
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

			res.ProtocolTelnetServerGetState200ApplicationJSONInt32Integers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetServerGetUserdb - Show the agent's TELNET user db file name
// User db file name
func (s *Telnet) ProtocolTelnetServerGetUserdb(ctx context.Context, request operations.ProtocolTelnetServerGetUserdbRequest) (*operations.ProtocolTelnetServerGetUserdbResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/userdb", request.PathParams)

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

	res := &operations.ProtocolTelnetServerGetUserdbResponse{
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

			res.ProtocolTelnetServerGetUserdb200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetServerGetUsers - Show the agent's TELNET users
// List of users
func (s *Telnet) ProtocolTelnetServerGetUsers(ctx context.Context, request operations.ProtocolTelnetServerGetUsersRequest) (*operations.ProtocolTelnetServerGetUsersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/users", request.PathParams)

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

	res := &operations.ProtocolTelnetServerGetUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TelnetUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TelnetUsers = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetSetConfig - Set the agent's TELNET configuration
// Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
func (s *Telnet) ProtocolTelnetSetConfig(ctx context.Context, request operations.ProtocolTelnetSetConfigRequest) (*operations.ProtocolTelnetSetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/config/{argument}/{value}", request.PathParams)

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

	res := &operations.ProtocolTelnetSetConfigResponse{
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
			res.ProtocolTelnetSetConfig200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// ProtocolTelnetSetTrace - Set the agent's TELNET traffic tracing
// 1 to enable, 0 to disable
func (s *Telnet) ProtocolTelnetSetTrace(ctx context.Context, request operations.ProtocolTelnetSetTraceRequest) (*operations.ProtocolTelnetSetTraceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/trace/{enableOrNot}", request.PathParams)

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

	res := &operations.ProtocolTelnetSetTraceResponse{
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
			res.ProtocolTelnetSetTrace200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}
