package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionCategoriesAddPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionCategoriesAddSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionCategoriesAddRequest struct {
	PathParams PrivateCollectionCategoriesAddPathParams
	Request    shared.CategoriesCreator `request:"mediaType=application/json"`
	Security   PrivateCollectionCategoriesAddSecurity
}

type PrivateCollectionCategoriesAddResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	Location     *shared.Location
	StatusCode   int64
}
