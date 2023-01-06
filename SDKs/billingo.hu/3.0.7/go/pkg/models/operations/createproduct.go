package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProductRequest struct {
	Request shared.ProductInput `request:"mediaType=application/json"`
}

type CreateProductResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	Product                 *shared.Product
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
