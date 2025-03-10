// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DeleteAppsAppIDNamespacesNamespaceIDSecurity struct {
	BearerAuth string `security:"scheme,type=http,subtype=bearer,name=Authorization"`
}

type DeleteAppsAppIDNamespacesNamespaceIDRequest struct {
	AppID       string `pathParam:"style=simple,explode=false,name=app_id"`
	NamespaceID string `pathParam:"style=simple,explode=false,name=namespace_id"`
}

type DeleteAppsAppIDNamespacesNamespaceIDResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Authentication failed
	Error *shared.Error
}
