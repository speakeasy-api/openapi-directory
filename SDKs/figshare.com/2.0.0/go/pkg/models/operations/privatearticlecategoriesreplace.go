package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleCategoriesReplacePathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleCategoriesReplaceSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleCategoriesReplaceRequest struct {
	PathParams PrivateArticleCategoriesReplacePathParams
	Request    shared.CategoriesCreator `request:"mediaType=application/json"`
	Security   PrivateArticleCategoriesReplaceSecurity
}

type PrivateArticleCategoriesReplaceResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
