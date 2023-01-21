package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAnomalySubscriptionXAmzTargetEnum string

const (
	UpdateAnomalySubscriptionXAmzTargetEnumAwsInsightsIndexServiceUpdateAnomalySubscription UpdateAnomalySubscriptionXAmzTargetEnum = "AWSInsightsIndexService.UpdateAnomalySubscription"
)

type UpdateAnomalySubscriptionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAnomalySubscriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateAnomalySubscriptionRequest struct {
	Headers UpdateAnomalySubscriptionHeaders
	Request shared.UpdateAnomalySubscriptionRequest `request:"mediaType=application/json"`
}

type UpdateAnomalySubscriptionResponse struct {
	ContentType                       string
	LimitExceededException            *interface{}
	StatusCode                        int64
	UnknownMonitorException           *interface{}
	UnknownSubscriptionException      *interface{}
	UpdateAnomalySubscriptionResponse *shared.UpdateAnomalySubscriptionResponse
}
