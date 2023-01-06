package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyBusinessAPIV1VerifyPhoneGetQueryParams struct {
	LockingPeriod *interface{} `queryParam:"style=form,explode=true,name=locking_period"`
	Query         string       `queryParam:"style=form,explode=true,name=query"`
}

type VerifyBusinessAPIV1VerifyPhoneGetRequest struct {
	QueryParams VerifyBusinessAPIV1VerifyPhoneGetQueryParams
}

type VerifyBusinessAPIV1VerifyPhoneGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
	VerifyPhone         *shared.VerifyPhone
}
