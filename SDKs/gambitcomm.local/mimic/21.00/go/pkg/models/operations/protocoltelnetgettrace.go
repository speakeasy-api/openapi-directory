package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolTelnetGetTracePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTelnetGetTraceRequest struct {
	PathParams ProtocolTelnetGetTracePathParams
}

type ProtocolTelnetGetTraceResponse struct {
	ConfigTELNET *shared.ConfigTelnet
	ContentType  string
	StatusCode   int64
}
