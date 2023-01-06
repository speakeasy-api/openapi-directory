package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleConfidentialityDetailsPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleConfidentialityDetailsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleConfidentialityDetailsRequest struct {
	PathParams PrivateArticleConfidentialityDetailsPathParams
	Security   PrivateArticleConfidentialityDetailsSecurity
}

type PrivateArticleConfidentialityDetailsResponse struct {
	ArticleConfidentiality *shared.ArticleConfidentiality
	ContentType            string
	ErrorMessage           *shared.ErrorMessage
	StatusCode             int64
}
