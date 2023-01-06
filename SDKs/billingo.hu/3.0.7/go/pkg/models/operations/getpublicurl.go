package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublicURLPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetPublicURLRequest struct {
	PathParams GetPublicURLPathParams
}

type GetPublicURLResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	DocumentPublicURL       *shared.DocumentPublicURL
	Headers                 map[string][]string
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
