package operations

import (
	"openapi/pkg/models/shared"
)

type RequestAccessTokenPathParams struct {
	KeyName string `pathParam:"style=simple,explode=false,name=keyName"`
}

type RequestAccessTokenQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type RequestAccessTokenHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type RequestAccessTokenRequest struct {
	PathParams  RequestAccessTokenPathParams
	QueryParams RequestAccessTokenQueryParams
	Headers     RequestAccessTokenHeaders
	Request     *interface{} `request:"mediaType=application/json"`
}

type RequestAccessTokenResponse struct {
	Body         []byte
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
	TokenDetails *shared.TokenDetails
}
