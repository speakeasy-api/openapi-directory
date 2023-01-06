package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationTechnicalProgressionPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationTechnicalProgressionRequest struct {
	PathParams ImportationTechnicalProgressionPathParams
}

type ImportationTechnicalProgressionResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ImportationTechnicalProgression  *shared.ImportationTechnicalProgression
}
