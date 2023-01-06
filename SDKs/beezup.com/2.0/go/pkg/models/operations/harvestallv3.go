package operations

import (
	"openapi/pkg/models/shared"
)

type HarvestAllV3QueryParams struct {
	StoreID *string `queryParam:"style=form,explode=true,name=storeId"`
}

type HarvestAllV3Request struct {
	QueryParams HarvestAllV3QueryParams
}

type HarvestAllV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
