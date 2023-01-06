package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateCollectionArticleDeletePathParams struct {
	ArticleID    int64 `pathParam:"style=simple,explode=false,name=article_id"`
	CollectionID int64 `pathParam:"style=simple,explode=false,name=collection_id"`
}

type PrivateCollectionArticleDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateCollectionArticleDeleteRequest struct {
	PathParams PrivateCollectionArticleDeletePathParams
	Security   PrivateCollectionArticleDeleteSecurity
}

type PrivateCollectionArticleDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
