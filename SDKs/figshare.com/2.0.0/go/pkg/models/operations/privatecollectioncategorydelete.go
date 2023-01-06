package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionCategoryDeletePathParams struct {
	CategoryID   int64 `pathParam:"style=simple,explode=false,name=category_id"`
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionCategoryDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionCategoryDeleteRequest struct {
	PathParams PrivateCollectionCategoryDeletePathParams
	Security   PrivateCollectionCategoryDeleteSecurity
}

type PrivateCollectionCategoryDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
