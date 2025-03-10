// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type ProtocolDhcpSetConfigRequest struct {
	// Agent to set the DHCP configuration
	AgentNum int `pathParam:"style=simple,explode=false,name=agentNum"`
	// Parameter to set the DHCP configuration
	Argument string `pathParam:"style=simple,explode=false,name=argument"`
	// Value to set the DHCP configuration
	Value string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolDhcpSetConfigResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// successful operation
	ProtocolDhcpSetConfig200ApplicationJSONString *string
}
