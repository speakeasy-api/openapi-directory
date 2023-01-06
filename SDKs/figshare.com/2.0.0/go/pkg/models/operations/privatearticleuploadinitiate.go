package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleUploadInitiatePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleUploadInitiateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleUploadInitiateRequest struct {
	PathParams PrivateArticleUploadInitiatePathParams
	Request    shared.FileCreator `request:"mediaType=application/json"`
	Security   PrivateArticleUploadInitiateSecurity
}

type PrivateArticleUploadInitiateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	Location     *shared.Location
	StatusCode   int64
}
