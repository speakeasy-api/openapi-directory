package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleReserveDoiPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleReserveDoiSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleReserveDoiRequest struct {
	PathParams PrivateArticleReserveDoiPathParams
	Security   PrivateArticleReserveDoiSecurity
}

type PrivateArticleReserveDoiResponse struct {
	ArticleDOI   *shared.ArticleDoi
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
