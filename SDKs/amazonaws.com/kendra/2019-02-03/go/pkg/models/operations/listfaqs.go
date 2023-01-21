package operations

import (
	"openapi/pkg/models/shared"
)

type ListFaqsXAmzTargetEnum string

const (
	ListFaqsXAmzTargetEnumAwsKendraFrontendServiceListFaqs ListFaqsXAmzTargetEnum = "AWSKendraFrontendService.ListFaqs"
)

type ListFaqsHeaders struct {
	XAmzAlgorithm     *string                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFaqsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListFaqsRequest struct {
	Headers ListFaqsHeaders
	Request shared.ListFaqsRequest `request:"mediaType=application/json"`
}

type ListFaqsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListFaqsResponse          *shared.ListFaqsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
