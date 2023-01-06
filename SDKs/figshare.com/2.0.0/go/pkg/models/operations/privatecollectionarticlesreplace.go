package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionArticlesReplacePathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionArticlesReplaceSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionArticlesReplaceRequest struct {
	PathParams PrivateCollectionArticlesReplacePathParams
	Request    shared.ArticlesCreator `request:"mediaType=application/json"`
	Security   PrivateCollectionArticlesReplaceSecurity
}

type PrivateCollectionArticlesReplaceResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
