package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitFeedbackXAmzTargetEnum string

const (
	SubmitFeedbackXAmzTargetEnumAwsKendraFrontendServiceSubmitFeedback SubmitFeedbackXAmzTargetEnum = "AWSKendraFrontendService.SubmitFeedback"
)

type SubmitFeedbackHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SubmitFeedbackXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SubmitFeedbackRequest struct {
	Headers SubmitFeedbackHeaders
	Request shared.SubmitFeedbackRequest `request:"mediaType=application/json"`
}

type SubmitFeedbackResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	InternalServerException      *interface{}
	ResourceNotFoundException    *interface{}
	ResourceUnavailableException *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	ValidationException          *interface{}
}
