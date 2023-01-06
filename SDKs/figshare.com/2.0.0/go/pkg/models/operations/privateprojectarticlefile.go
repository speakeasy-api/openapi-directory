package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectArticleFilePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	FileID    int64 `pathParam:"style=simple,explode=false,name=file_id"`
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type PrivateProjectArticleFileSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateProjectArticleFileRequest struct {
	PathParams PrivateProjectArticleFilePathParams
	Security   PrivateProjectArticleFileSecurity
}

type PrivateProjectArticleFileResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	PrivateFile  *shared.PrivateFile
	StatusCode   int64
}
