package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectLeavePathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectLeaveSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectLeaveRequest struct {
	PathParams PrivateProjectLeavePathParams
	Security   PrivateProjectLeaveSecurity
}

type PrivateProjectLeaveResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
