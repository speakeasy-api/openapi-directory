// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetConnectorsIDConnectorLogosMainRequest struct {
	Expand      *string `queryParam:"style=form,explode=true,name=expand"`
	IDConnector int64   `pathParam:"style=simple,explode=false,name=id_connector"`
}

// GetConnectorsIDConnectorLogosMain200ApplicationJSON - connectorlogos
type GetConnectorsIDConnectorLogosMain200ApplicationJSON struct {
	Connectorlogos []shared.ConnectorLogo `json:"connectorlogos"`
	// total number of results
	Total *float64 `json:"total,omitempty"`
}

type GetConnectorsIDConnectorLogosMainResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// connectorlogos
	GetConnectorsIDConnectorLogosMain200ApplicationJSONObject *GetConnectorsIDConnectorLogosMain200ApplicationJSON
}
