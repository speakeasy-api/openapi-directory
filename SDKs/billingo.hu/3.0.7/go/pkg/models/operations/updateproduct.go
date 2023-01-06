package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProductPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateProductRequest struct {
	PathParams UpdateProductPathParams
	Request    shared.ProductInput `request:"mediaType=application/json"`
}

type UpdateProductResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	Product                 *shared.Product
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
