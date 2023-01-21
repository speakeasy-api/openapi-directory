package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAnomalySubscriptionXAmzTargetEnum string

const (
	DeleteAnomalySubscriptionXAmzTargetEnumAwsInsightsIndexServiceDeleteAnomalySubscription DeleteAnomalySubscriptionXAmzTargetEnum = "AWSInsightsIndexService.DeleteAnomalySubscription"
)

type DeleteAnomalySubscriptionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAnomalySubscriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteAnomalySubscriptionRequest struct {
	Headers DeleteAnomalySubscriptionHeaders
	Request shared.DeleteAnomalySubscriptionRequest `request:"mediaType=application/json"`
}

type DeleteAnomalySubscriptionResponse struct {
	ContentType                       string
	DeleteAnomalySubscriptionResponse map[string]interface{}
	LimitExceededException            *interface{}
	StatusCode                        int64
	UnknownSubscriptionException      *interface{}
}
