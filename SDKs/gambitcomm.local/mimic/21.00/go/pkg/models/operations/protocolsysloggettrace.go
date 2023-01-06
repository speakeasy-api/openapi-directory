package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolSyslogGetTracePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSyslogGetTraceRequest struct {
	PathParams ProtocolSyslogGetTracePathParams
}

type ProtocolSyslogGetTraceResponse struct {
	ConfigSYSLOG *shared.ConfigSyslog
	ContentType  string
	StatusCode   int64
}
