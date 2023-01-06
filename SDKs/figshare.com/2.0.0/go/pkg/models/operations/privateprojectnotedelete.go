package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectNoteDeletePathParams struct {
	NoteID    int64 `pathParam:"style=simple,explode=false,name=note_id"`
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectNoteDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectNoteDeleteRequest struct {
	PathParams PrivateProjectNoteDeletePathParams
	Security   PrivateProjectNoteDeleteSecurity
}

type PrivateProjectNoteDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
