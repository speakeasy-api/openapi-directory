package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolIpmiGetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolIpmiGetConfigRequest struct {
	PathParams ProtocolIpmiGetConfigPathParams
}

type ProtocolIpmiGetConfigResponse struct {
	ConfigIPMI  *shared.ConfigIpmi
	ContentType string
	StatusCode  int64
}
