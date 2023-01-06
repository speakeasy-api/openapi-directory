package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleEmbargoDetailsPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleEmbargoDetailsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleEmbargoDetailsRequest struct {
	PathParams PrivateArticleEmbargoDetailsPathParams
	Security   PrivateArticleEmbargoDetailsSecurity
}

type PrivateArticleEmbargoDetailsResponse struct {
	ArticleEmbargo *shared.ArticleEmbargo
	ContentType    string
	ErrorMessage   *shared.ErrorMessage
	StatusCode     int64
}
