package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateArticleCategoriesAddPathParams struct {
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
}

type PrivateArticleCategoriesAddSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateArticleCategoriesAddRequest struct {
	PathParams PrivateArticleCategoriesAddPathParams
	Request    shared.CategoriesCreator `request:"mediaType=application/json"`
	Security   PrivateArticleCategoriesAddSecurity
}

type PrivateArticleCategoriesAddResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
