package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolDhcpGetTracePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolDhcpGetTraceRequest struct {
	PathParams ProtocolDhcpGetTracePathParams
}

type ProtocolDhcpGetTraceResponse struct {
	ConfigDHCP  *shared.ConfigDhcp
	ContentType string
	StatusCode  int64
}
