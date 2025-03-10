// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type EnterpriseAdminGetPreReceiveHookForOrgRequest struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
	// pre_receive_hook_id parameter
	PreReceiveHookID int64 `pathParam:"style=simple,explode=false,name=pre_receive_hook_id"`
}

type EnterpriseAdminGetPreReceiveHookForOrgResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	OrgPreReceiveHook *shared.OrgPreReceiveHook
}
