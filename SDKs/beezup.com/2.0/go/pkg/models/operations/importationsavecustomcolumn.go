package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationSaveCustomColumnPathParams struct {
	ColumnID    string `pathParam:"style=simple,explode=false,name=columnId"`
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationSaveCustomColumnRequest struct {
	PathParams ImportationSaveCustomColumnPathParams
	Request    shared.ChangeCustomColumnRequest `request:"mediaType=application/json"`
}

type ImportationSaveCustomColumnResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
