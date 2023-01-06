package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleDetailsPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleDetailsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleDetailsRequest struct {
	PathParams PrivateArticleDetailsPathParams
	Security   PrivateArticleDetailsSecurity
}

type PrivateArticleDetailsResponse struct {
	ArticleCompletePrivate *shared.ArticleCompletePrivate
	ContentType            string
	ErrorMessage           *shared.ErrorMessage
	StatusCode             int64
}
