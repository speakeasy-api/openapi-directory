package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleFilePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	FileID    int64 `pathParam:"style=simple,explode=false,name=file_id"`
}

type PrivateArticleFileSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleFileRequest struct {
	PathParams PrivateArticleFilePathParams
	Security   PrivateArticleFileSecurity
}

type PrivateArticleFileResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	PrivateFile  *shared.PrivateFile
	StatusCode   int64
}
