package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectNoteUpdatePathParams struct {
	NoteID    int64 `pathParam:"style=simple,explode=false,name=note_id"`
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectNoteUpdateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectNoteUpdateRequest struct {
	PathParams PrivateProjectNoteUpdatePathParams
	Request    shared.ProjectNoteCreate `request:"mediaType=application/json"`
	Security   PrivateProjectNoteUpdateSecurity
}

type PrivateProjectNoteUpdateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
