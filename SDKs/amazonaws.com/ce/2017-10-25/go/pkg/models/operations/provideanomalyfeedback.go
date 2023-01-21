package operations

import (
	"openapi/pkg/models/shared"
)

type ProvideAnomalyFeedbackXAmzTargetEnum string

const (
	ProvideAnomalyFeedbackXAmzTargetEnumAwsInsightsIndexServiceProvideAnomalyFeedback ProvideAnomalyFeedbackXAmzTargetEnum = "AWSInsightsIndexService.ProvideAnomalyFeedback"
)

type ProvideAnomalyFeedbackHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ProvideAnomalyFeedbackXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ProvideAnomalyFeedbackRequest struct {
	Headers ProvideAnomalyFeedbackHeaders
	Request shared.ProvideAnomalyFeedbackRequest `request:"mediaType=application/json"`
}

type ProvideAnomalyFeedbackResponse struct {
	ContentType                    string
	LimitExceededException         *interface{}
	ProvideAnomalyFeedbackResponse *shared.ProvideAnomalyFeedbackResponse
	StatusCode                     int64
}
