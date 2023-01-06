package operations

import (
	"openapi/pkg/models/shared"
)

type GetAutomaticTransitionsQueryParams struct {
	StoreID *string `queryParam:"style=form,explode=true,name=storeId"`
}

type GetAutomaticTransitionsHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetAutomaticTransitionsRequest struct {
	QueryParams GetAutomaticTransitionsQueryParams
	Headers     GetAutomaticTransitionsHeaders
}

type GetAutomaticTransitionsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	AutomaticTransitionInfoList      *shared.AutomaticTransitionInfoList
}
