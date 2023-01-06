package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleConfidentialityUpdatePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleConfidentialityUpdateSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleConfidentialityUpdateRequest struct {
	PathParams PrivateArticleConfidentialityUpdatePathParams
	Request    shared.ConfidentialityCreator `request:"mediaType=application/json"`
	Security   PrivateArticleConfidentialityUpdateSecurity
}

type PrivateArticleConfidentialityUpdateResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
