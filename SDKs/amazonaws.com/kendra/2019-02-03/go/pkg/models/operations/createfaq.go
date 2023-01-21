package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFaqXAmzTargetEnum string

const (
	CreateFaqXAmzTargetEnumAwsKendraFrontendServiceCreateFaq CreateFaqXAmzTargetEnum = "AWSKendraFrontendService.CreateFaq"
)

type CreateFaqHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateFaqXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateFaqRequest struct {
	Headers CreateFaqHeaders
	Request shared.CreateFaqRequest `request:"mediaType=application/json"`
}

type CreateFaqResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateFaqResponse             *shared.CreateFaqResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
