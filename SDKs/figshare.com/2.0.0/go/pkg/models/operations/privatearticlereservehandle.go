package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleReserveHandlePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleReserveHandleSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleReserveHandleRequest struct {
	PathParams PrivateArticleReserveHandlePathParams
	Security   PrivateArticleReserveHandleSecurity
}

type PrivateArticleReserveHandleResponse struct {
	ArticleHandle *shared.ArticleHandle
	ContentType   string
	ErrorMessage  *shared.ErrorMessage
	StatusCode    int64
}
