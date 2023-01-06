package operations

import (
	"openapi/pkg/models/shared"
)

type StatusCallAPIV1StatusCallGetQueryParams struct {
	Query string `queryParam:"style=form,explode=true,name=query"`
}

type StatusCallAPIV1StatusCallGetRequest struct {
	QueryParams StatusCallAPIV1StatusCallGetQueryParams
}

type StatusCallAPIV1StatusCallGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCall          *shared.StatusCall
	StatusCode          int64
}
