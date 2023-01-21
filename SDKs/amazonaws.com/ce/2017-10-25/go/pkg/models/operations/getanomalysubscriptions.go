package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnomalySubscriptionsXAmzTargetEnum string

const (
	GetAnomalySubscriptionsXAmzTargetEnumAwsInsightsIndexServiceGetAnomalySubscriptions GetAnomalySubscriptionsXAmzTargetEnum = "AWSInsightsIndexService.GetAnomalySubscriptions"
)

type GetAnomalySubscriptionsHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAnomalySubscriptionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetAnomalySubscriptionsRequest struct {
	Headers GetAnomalySubscriptionsHeaders
	Request shared.GetAnomalySubscriptionsRequest `request:"mediaType=application/json"`
}

type GetAnomalySubscriptionsResponse struct {
	ContentType                     string
	GetAnomalySubscriptionsResponse *shared.GetAnomalySubscriptionsResponse
	InvalidNextTokenException       *interface{}
	LimitExceededException          *interface{}
	StatusCode                      int64
	UnknownSubscriptionException    *interface{}
}
