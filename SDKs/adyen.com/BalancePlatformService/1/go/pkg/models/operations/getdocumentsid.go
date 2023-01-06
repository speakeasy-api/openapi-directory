package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDocumentsIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDocumentsIDRequest struct {
	PathParams GetDocumentsIDPathParams
	Security   GetDocumentsIDSecurity
}

type GetDocumentsIDResponse struct {
	ContentType  string
	Document     *interface{}
	ServiceError *interface{}
	StatusCode   int64
}
