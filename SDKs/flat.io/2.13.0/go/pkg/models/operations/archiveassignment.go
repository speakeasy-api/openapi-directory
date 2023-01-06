package operations

import (
	"openapi/pkg/models/shared"
)

type ArchiveAssignmentPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
}

type ArchiveAssignmentSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ArchiveAssignmentRequest struct {
	PathParams ArchiveAssignmentPathParams
	Security   ArchiveAssignmentSecurity
}

type ArchiveAssignmentResponse struct {
	Assignment        *shared.Assignment
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
