package operations

import (
	"openapi/pkg/models/shared"
)

type AccountInstitutionCurationCommentsPathParams struct {
	CurationID int64 `pathParam:"style=simple,explode=false,name=curation_id"`
}

type AccountInstitutionCurationCommentsQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type AccountInstitutionCurationCommentsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type AccountInstitutionCurationCommentsRequest struct {
	PathParams  AccountInstitutionCurationCommentsPathParams
	QueryParams AccountInstitutionCurationCommentsQueryParams
	Security    AccountInstitutionCurationCommentsSecurity
}

type AccountInstitutionCurationCommentsResponse struct {
	ContentType     string
	CurationComment *shared.CurationComment
	ErrorMessage    *shared.ErrorMessage
	StatusCode      int64
}
