package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleEmbargoUpdatePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleEmbargoUpdateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleEmbargoUpdateRequest struct {
	PathParams PrivateArticleEmbargoUpdatePathParams
	Request    shared.ArticleEmbargoUpdater `request:"mediaType=application/json"`
	Security   PrivateArticleEmbargoUpdateSecurity
}

type PrivateArticleEmbargoUpdateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
