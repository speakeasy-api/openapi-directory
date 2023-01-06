package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionArticlesListPathParams struct {
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionArticlesListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionArticlesListRequest struct {
	PathParams PrivateCollectionArticlesListPathParams
	Security   PrivateCollectionArticlesListSecurity
}

type PrivateCollectionArticlesListResponse struct {
	Articles     []shared.Article
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
