package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolMqttGetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolMqttGetConfigRequest struct {
	PathParams ProtocolMqttGetConfigPathParams
}

type ProtocolMqttGetConfigResponse struct {
	ConfigMQTT  *shared.ConfigMqtt
	ContentType string
	StatusCode  int64
}
