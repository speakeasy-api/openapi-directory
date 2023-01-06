package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectArticleDeletePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectArticleDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectArticleDeleteRequest struct {
	PathParams PrivateProjectArticleDeletePathParams
	Security   PrivateProjectArticleDeleteSecurity
}

type PrivateProjectArticleDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
