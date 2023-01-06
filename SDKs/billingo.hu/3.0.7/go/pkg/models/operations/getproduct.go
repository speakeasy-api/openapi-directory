package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetProductRequest struct {
	PathParams GetProductPathParams
}

type GetProductResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	Product                 *shared.Product
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
