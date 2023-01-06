package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleFileDeletePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	FileID    int64 `pathParam:"style=simple,explode=false,name=file_id"`
}

type PrivateArticleFileDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleFileDeleteRequest struct {
	PathParams PrivateArticleFileDeletePathParams
	Security   PrivateArticleFileDeleteSecurity
}

type PrivateArticleFileDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
