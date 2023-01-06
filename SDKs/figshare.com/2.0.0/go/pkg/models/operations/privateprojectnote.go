package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectNotePathParams struct {
	NoteID    int64 `pathParam:"style=simple,explode=false,name=note_id"`
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectNoteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectNoteRequest struct {
	PathParams PrivateProjectNotePathParams
	Security   PrivateProjectNoteSecurity
}

type PrivateProjectNoteResponse struct {
	ContentType        string
	ErrorMessage       *shared.ErrorMessage
	ProjectNotePrivate *shared.ProjectNotePrivate
	StatusCode         int64
}
