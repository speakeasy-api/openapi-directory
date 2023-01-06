package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleAuthorsReplacePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleAuthorsReplaceSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleAuthorsReplaceRequest struct {
	PathParams PrivateArticleAuthorsReplacePathParams
	Request    shared.AuthorsCreator `request:"mediaType=application/json"`
	Security   PrivateArticleAuthorsReplaceSecurity
}

type PrivateArticleAuthorsReplaceResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Headers      map[string][]string
	StatusCode   int64
}
