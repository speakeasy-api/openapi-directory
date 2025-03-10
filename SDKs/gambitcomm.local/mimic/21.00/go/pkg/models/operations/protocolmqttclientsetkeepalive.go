// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type ProtocolMqttClientSetKeepaliveRequest struct {
	// Agent to set MQTT config
	AgentNum int `pathParam:"style=simple,explode=false,name=agentNum"`
	// period to send keepalive messages
	AliveTime int `pathParam:"style=simple,explode=false,name=aliveTime"`
}

type ProtocolMqttClientSetKeepaliveResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// successful operation
	ProtocolMqttClientSetKeepalive200ApplicationJSONInt32Integers []int
}
