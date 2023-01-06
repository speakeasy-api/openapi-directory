package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectArticleFilesPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectArticleFilesSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectArticleFilesRequest struct {
	PathParams PrivateProjectArticleFilesPathParams
	Security   PrivateProjectArticleFilesSecurity
}

type PrivateProjectArticleFilesResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	PrivateFiles []shared.PrivateFile
	StatusCode   int64
}
