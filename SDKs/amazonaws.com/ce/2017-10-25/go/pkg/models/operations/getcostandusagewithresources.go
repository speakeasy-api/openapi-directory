package operations

import (
	"openapi/pkg/models/shared"
)

type GetCostAndUsageWithResourcesXAmzTargetEnum string

const (
	GetCostAndUsageWithResourcesXAmzTargetEnumAwsInsightsIndexServiceGetCostAndUsageWithResources GetCostAndUsageWithResourcesXAmzTargetEnum = "AWSInsightsIndexService.GetCostAndUsageWithResources"
)

type GetCostAndUsageWithResourcesHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCostAndUsageWithResourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetCostAndUsageWithResourcesRequest struct {
	Headers GetCostAndUsageWithResourcesHeaders
	Request shared.GetCostAndUsageWithResourcesRequest `request:"mediaType=application/json"`
}

type GetCostAndUsageWithResourcesResponse struct {
	BillExpirationException              *interface{}
	ContentType                          string
	DataUnavailableException             *interface{}
	GetCostAndUsageWithResourcesResponse *shared.GetCostAndUsageWithResourcesResponse
	InvalidNextTokenException            *interface{}
	LimitExceededException               *interface{}
	RequestChangedException              *interface{}
	StatusCode                           int64
}
