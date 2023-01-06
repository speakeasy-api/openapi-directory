package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectArticleDetailsPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectArticleDetailsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectArticleDetailsRequest struct {
	PathParams PrivateProjectArticleDetailsPathParams
	Security   PrivateProjectArticleDetailsSecurity
}

type PrivateProjectArticleDetailsResponse struct {
	ContentType    string
	ErrorMessage   *shared.ErrorMessage
	ProjectArticle *shared.ProjectArticle
	StatusCode     int64
}
