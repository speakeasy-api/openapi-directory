package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsageForecastXAmzTargetEnum string

const (
	GetUsageForecastXAmzTargetEnumAwsInsightsIndexServiceGetUsageForecast GetUsageForecastXAmzTargetEnum = "AWSInsightsIndexService.GetUsageForecast"
)

type GetUsageForecastHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetUsageForecastXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetUsageForecastRequest struct {
	Headers GetUsageForecastHeaders
	Request shared.GetUsageForecastRequest `request:"mediaType=application/json"`
}

type GetUsageForecastResponse struct {
	ContentType                    string
	DataUnavailableException       *interface{}
	GetUsageForecastResponse       *shared.GetUsageForecastResponse
	LimitExceededException         *interface{}
	StatusCode                     int64
	UnresolvableUsageUnitException *interface{}
}
