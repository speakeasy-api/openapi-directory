package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolSyslogGetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSyslogGetConfigRequest struct {
	PathParams ProtocolSyslogGetConfigPathParams
}

type ProtocolSyslogGetConfigResponse struct {
	ConfigSYSLOG *shared.ConfigSyslog
	ContentType  string
	StatusCode   int64
}
