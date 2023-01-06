package operations

import (
	"openapi/pkg/models/shared"
)

type CopyOptimisationPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CopyOptimisationRequest struct {
	PathParams CopyOptimisationPathParams
	Request    shared.CopyOptimisationRequest `request:"mediaType=application/json"`
}

type CopyOptimisationResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	CopyOptimisationResponse         *shared.CopyOptimisationResponse
}
