package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleConfidentialityDeletePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleConfidentialityDeleteSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleConfidentialityDeleteRequest struct {
	PathParams PrivateArticleConfidentialityDeletePathParams
	Security   PrivateArticleConfidentialityDeleteSecurity
}

type PrivateArticleConfidentialityDeleteResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
