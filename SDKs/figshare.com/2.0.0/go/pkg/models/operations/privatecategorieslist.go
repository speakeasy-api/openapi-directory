package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCategoriesListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCategoriesListRequest struct {
	Security PrivateCategoriesListSecurity
}

type PrivateCategoriesListResponse struct {
	Categories   []shared.Category
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
