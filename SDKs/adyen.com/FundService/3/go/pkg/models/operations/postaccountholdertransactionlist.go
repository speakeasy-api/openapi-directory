// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PostAccountHolderTransactionListSecurity struct {
	APIKeyAuth *string                 `security:"scheme,type=apiKey,subtype=header,name=X-API-Key"`
	BasicAuth  *shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostAccountHolderTransactionListResponse struct {
	// OK - the request has succeeded.
	AccountHolderTransactionListResponse *shared.AccountHolderTransactionListResponse
	ContentType                          string
	// Bad Request - a problem reading or understanding the request.
	ServiceError *shared.ServiceError
	StatusCode   int
	RawResponse  *http.Response
}
