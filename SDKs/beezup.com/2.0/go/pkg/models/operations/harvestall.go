package operations

import (
	"openapi/pkg/models/shared"
)

type HarvestAllQueryParams struct {
	StoreID *string `queryParam:"style=form,explode=true,name=storeId"`
}

type HarvestAllRequest struct {
	QueryParams HarvestAllQueryParams
}

type HarvestAllResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
}
