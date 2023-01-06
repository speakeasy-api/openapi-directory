package operations

import (
	"openapi/pkg/models/shared"
)

type PatchDocumentsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchDocumentsIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PatchDocumentsIDRequest struct {
	PathParams PatchDocumentsIDPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   PatchDocumentsIDSecurity
}

type PatchDocumentsIDResponse struct {
	ContentType  string
	Document     *interface{}
	ServiceError *interface{}
	StatusCode   int64
}
