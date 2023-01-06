package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleUploadCompletePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	FileID    int64 `pathParam:"style=simple,explode=false,name=file_id"`
}

type PrivateArticleUploadCompleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleUploadCompleteRequest struct {
	PathParams PrivateArticleUploadCompletePathParams
	Security   PrivateArticleUploadCompleteSecurity
}

type PrivateArticleUploadCompleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
