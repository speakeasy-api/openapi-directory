package operations

import (
	"openapi/pkg/models/shared"
)

type InstitutionArticlesPathParams struct {
	InstitutionStringID string `pathParam:"style=simple,explode=false,name=institution_string_id"`
}

type InstitutionArticlesQueryParams struct {
	Filename   string `queryParam:"style=form,explode=true,name=filename"`
	ResourceID string `queryParam:"style=form,explode=true,name=resource_id"`
}

type InstitutionArticlesRequest struct {
	PathParams  InstitutionArticlesPathParams
	QueryParams InstitutionArticlesQueryParams
}

type InstitutionArticlesResponse struct {
	Articles    []shared.Article
	ContentType string
	StatusCode  int64
}
