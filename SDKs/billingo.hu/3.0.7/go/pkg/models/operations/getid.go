package operations

import (
	"openapi/pkg/models/shared"
)

type GetIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetIDRequest struct {
	PathParams GetIDPathParams
}

type GetIDResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	ID                      *shared.ID
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
