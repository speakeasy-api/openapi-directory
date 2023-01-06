package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyNameAPIV1VerifyNameGetQueryParams struct {
	City  *string `queryParam:"style=form,explode=true,name=city"`
	Query string  `queryParam:"style=form,explode=true,name=query"`
	State *string `queryParam:"style=form,explode=true,name=state"`
}

type VerifyNameAPIV1VerifyNameGetRequest struct {
	QueryParams VerifyNameAPIV1VerifyNameGetQueryParams
}

type VerifyNameAPIV1VerifyNameGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
	VerifyName          *shared.VerifyName
}
