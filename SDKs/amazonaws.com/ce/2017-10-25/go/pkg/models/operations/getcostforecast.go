package operations

import (
	"openapi/pkg/models/shared"
)

type GetCostForecastXAmzTargetEnum string

const (
	GetCostForecastXAmzTargetEnumAwsInsightsIndexServiceGetCostForecast GetCostForecastXAmzTargetEnum = "AWSInsightsIndexService.GetCostForecast"
)

type GetCostForecastHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCostForecastXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetCostForecastRequest struct {
	Headers GetCostForecastHeaders
	Request shared.GetCostForecastRequest `request:"mediaType=application/json"`
}

type GetCostForecastResponse struct {
	ContentType              string
	DataUnavailableException *interface{}
	GetCostForecastResponse  *shared.GetCostForecastResponse
	LimitExceededException   *interface{}
	StatusCode               int64
}
