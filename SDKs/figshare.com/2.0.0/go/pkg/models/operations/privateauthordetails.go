package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateAuthorDetailsPathParams struct {
	AuthorID int64 `pathParam:"style=simple,explode=false,name=author_id"`
}

type PrivateAuthorDetailsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateAuthorDetailsRequest struct {
	PathParams PrivateAuthorDetailsPathParams
	Security   PrivateAuthorDetailsSecurity
}

type PrivateAuthorDetailsResponse struct {
	AuthorComplete *shared.AuthorComplete
	ContentType    string
	ErrorMessage   *shared.ErrorMessage
	StatusCode     int64
}
