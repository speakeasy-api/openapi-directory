package operations

import (
	"openapi/pkg/models/shared"
)

type GetOnlineSzamlaStatusPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetOnlineSzamlaStatusRequest struct {
	PathParams GetOnlineSzamlaStatusPathParams
}

type GetOnlineSzamlaStatusResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	OnlineSzamlaStatus      *shared.OnlineSzamlaStatus
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
