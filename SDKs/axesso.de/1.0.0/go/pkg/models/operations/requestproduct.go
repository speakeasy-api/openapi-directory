package operations

import (
	"openapi/pkg/models/shared"
)

type RequestProductQueryParams struct {
	Size *string `queryParam:"style=form,explode=true,name=size"`
	URL  string  `queryParam:"style=form,explode=true,name=url"`
}

type RequestProductRequest struct {
	QueryParams RequestProductQueryParams
}

type RequestProductResponse struct {
	ContentType            string
	ProductDetailsResponse *shared.ProductDetailsResponse
	StatusCode             int64
}
