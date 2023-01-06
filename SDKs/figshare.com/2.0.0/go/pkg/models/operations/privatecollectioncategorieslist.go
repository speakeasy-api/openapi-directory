package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionCategoriesListPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionCategoriesListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionCategoriesListRequest struct {
	PathParams PrivateCollectionCategoriesListPathParams
	Security   PrivateCollectionCategoriesListSecurity
}

type PrivateCollectionCategoriesListResponse struct {
	Categories   []shared.Category
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
