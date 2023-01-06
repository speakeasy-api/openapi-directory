package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectDetailsPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectDetailsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectDetailsRequest struct {
	PathParams PrivateProjectDetailsPathParams
	Security   PrivateProjectDetailsSecurity
}

type PrivateProjectDetailsResponse struct {
	ContentType            string
	ErrorMessage           *shared.ErrorMessage
	ProjectCompletePrivate *shared.ProjectCompletePrivate
	StatusCode             int64
}
