package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectNotesListPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectNotesListQueryParams struct {
	Limit    *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type PrivateProjectNotesListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectNotesListRequest struct {
	PathParams  PrivateProjectNotesListPathParams
	QueryParams PrivateProjectNotesListQueryParams
	Security    PrivateProjectNotesListSecurity
}

type PrivateProjectNotesListResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	ProjectNotes []shared.ProjectNote
	StatusCode   int64
}
