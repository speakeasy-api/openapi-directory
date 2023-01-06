package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionArticlesAddPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionArticlesAddSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionArticlesAddRequest struct {
	PathParams PrivateCollectionArticlesAddPathParams
	Request    shared.ArticlesCreator `request:"mediaType=application/json"`
	Security   PrivateCollectionArticlesAddSecurity
}

type PrivateCollectionArticlesAddResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	Location     *shared.Location
	StatusCode   int64
}
