package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionCategoriesReplacePathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionCategoriesReplaceSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionCategoriesReplaceRequest struct {
	PathParams PrivateCollectionCategoriesReplacePathParams
	Request    shared.CategoriesCreator `request:"mediaType=application/json"`
	Security   PrivateCollectionCategoriesReplaceSecurity
}

type PrivateCollectionCategoriesReplaceResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
