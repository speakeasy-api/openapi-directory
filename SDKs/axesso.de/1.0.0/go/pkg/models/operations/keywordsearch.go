package operations

import (
	"openapi/pkg/models/shared"
)

type KeywordSearchQueryParams struct {
	DomainCode       string  `queryParam:"style=form,explode=true,name=domainCode"`
	Keyword          string  `queryParam:"style=form,explode=true,name=keyword"`
	NumberOfProducts *int64  `queryParam:"style=form,explode=true,name=numberOfProducts"`
	SortBy           *string `queryParam:"style=form,explode=true,name=sortBy"`
}

type KeywordSearchRequest struct {
	QueryParams KeywordSearchQueryParams
}

type KeywordSearchResponse struct {
	ContentType           string
	KeywordSearchResponse *shared.KeywordSearchResponse
	StatusCode            int64
}
