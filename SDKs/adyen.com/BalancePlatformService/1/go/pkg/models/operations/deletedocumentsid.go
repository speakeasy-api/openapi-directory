package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDocumentsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteDocumentsIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteDocumentsIDRequest struct {
	PathParams DeleteDocumentsIDPathParams
	Security   DeleteDocumentsIDSecurity
}

type DeleteDocumentsIDResponse struct {
	ContentType  string
	ServiceError *interface{}
	StatusCode   int64
	VoidResponse *interface{}
}
