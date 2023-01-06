package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRulePathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CreateRuleRequest struct {
	PathParams CreateRulePathParams
	Request    shared.CreateRuleRequest `request:"mediaType=application/json"`
}

type CreateRuleResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
}
