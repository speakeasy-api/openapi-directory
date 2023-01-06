package operations

import (
	"openapi/pkg/models/shared"
)

type GetTimeQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type GetTimeHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type GetTimeRequest struct {
	QueryParams GetTimeQueryParams
	Headers     GetTimeHeaders
}

type GetTimeResponse struct {
	Body                              []byte
	ContentType                       string
	Error                             *shared.Error
	StatusCode                        int64
	GetTime2XXApplicationJSONIntegers []int64
	GetTime2XXTextHTMLString          *string
}
