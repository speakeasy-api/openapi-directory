package operations

import (
	"openapi/pkg/models/shared"
)

type PostAccountInstitutionReviewCurationIDCommentsPathParams struct {
	CurationID int64 `pathParam:"style=simple,explode=false,name=curation_id"`
}

type PostAccountInstitutionReviewCurationIDCommentsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostAccountInstitutionReviewCurationIDCommentsRequest struct {
	PathParams PostAccountInstitutionReviewCurationIDCommentsPathParams
	Request    shared.CurationCommentCreate `request:"mediaType=application/json"`
	Security   PostAccountInstitutionReviewCurationIDCommentsSecurity
}

type PostAccountInstitutionReviewCurationIDCommentsResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
