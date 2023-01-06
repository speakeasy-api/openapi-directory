package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleFilesListPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleFilesListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleFilesListRequest struct {
	PathParams PrivateArticleFilesListPathParams
	Security   PrivateArticleFilesListSecurity
}

type PrivateArticleFilesListResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	PrivateFiles []shared.PrivateFile
	StatusCode   int64
}
