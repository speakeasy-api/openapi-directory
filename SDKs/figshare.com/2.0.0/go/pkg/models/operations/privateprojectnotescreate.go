package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectNotesCreatePathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectNotesCreateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectNotesCreateRequest struct {
	PathParams PrivateProjectNotesCreatePathParams
	Request    shared.ProjectNoteCreate `request:"mediaType=application/json"`
	Security   PrivateProjectNotesCreateSecurity
}

type PrivateProjectNotesCreateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	Location     *shared.Location
	StatusCode   int64
}
