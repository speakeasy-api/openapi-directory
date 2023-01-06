package operations

import (
	"openapi/pkg/models/shared"
)

type StatusSkuAPIV1StatusSkuGetQueryParams struct {
	Query string `queryParam:"style=form,explode=true,name=query"`
}

type StatusSkuAPIV1StatusSkuGetRequest struct {
	QueryParams StatusSkuAPIV1StatusSkuGetQueryParams
}

type StatusSkuAPIV1StatusSkuGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCall          *shared.StatusCall
	StatusCode          int64
}
