package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationMapCustomColumnPathParams struct {
	ColumnID    string `pathParam:"style=simple,explode=false,name=columnId"`
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationMapCustomColumnRequest struct {
	PathParams ImportationMapCustomColumnPathParams
	Request    shared.MapBeezUpColumnRequest `request:"mediaType=application/json"`
}

type ImportationMapCustomColumnResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
