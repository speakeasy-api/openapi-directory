package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProductPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteProductRequest struct {
	PathParams DeleteProductPathParams
}

type DeleteProductResponse struct {
	ClientErrorResponse *shared.ClientErrorResponse
	ContentType         string
	Headers             map[string][]string
	ServerErrorResponse *shared.ServerErrorResponse
	StatusCode          int64
}
