package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAnomalySubscriptionXAmzTargetEnum string

const (
	CreateAnomalySubscriptionXAmzTargetEnumAwsInsightsIndexServiceCreateAnomalySubscription CreateAnomalySubscriptionXAmzTargetEnum = "AWSInsightsIndexService.CreateAnomalySubscription"
)

type CreateAnomalySubscriptionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAnomalySubscriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateAnomalySubscriptionRequest struct {
	Headers CreateAnomalySubscriptionHeaders
	Request shared.CreateAnomalySubscriptionRequest `request:"mediaType=application/json"`
}

type CreateAnomalySubscriptionResponse struct {
	ContentType                       string
	CreateAnomalySubscriptionResponse *shared.CreateAnomalySubscriptionResponse
	LimitExceededException            *interface{}
	StatusCode                        int64
	UnknownMonitorException           *interface{}
}
