package operations

import (
	"openapi/pkg/models/shared"
)

type VerifySkuAPIV1VerifySkuGetQueryParams struct {
	LockingPeriod *interface{} `queryParam:"style=form,explode=true,name=locking_period"`
	Query         string       `queryParam:"style=form,explode=true,name=query"`
}

type VerifySkuAPIV1VerifySkuGetRequest struct {
	QueryParams VerifySkuAPIV1VerifySkuGetQueryParams
}

type VerifySkuAPIV1VerifySkuGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
	VerifyPhone         *shared.VerifyPhone
}
