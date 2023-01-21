package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIndexXAmzTargetEnum string

const (
	UpdateIndexXAmzTargetEnumAwsKendraFrontendServiceUpdateIndex UpdateIndexXAmzTargetEnum = "AWSKendraFrontendService.UpdateIndex"
)

type UpdateIndexHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateIndexXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateIndexRequest struct {
	Headers UpdateIndexHeaders
	Request shared.UpdateIndexRequest `request:"mediaType=application/json"`
}

type UpdateIndexResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
