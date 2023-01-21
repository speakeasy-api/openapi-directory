package operations

import (
	"openapi/pkg/models/shared"
)

type ListThesauriXAmzTargetEnum string

const (
	ListThesauriXAmzTargetEnumAwsKendraFrontendServiceListThesauri ListThesauriXAmzTargetEnum = "AWSKendraFrontendService.ListThesauri"
)

type ListThesauriHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListThesauriXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListThesauriRequest struct {
	Headers ListThesauriHeaders
	Request shared.ListThesauriRequest `request:"mediaType=application/json"`
}

type ListThesauriResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListThesauriResponse      *shared.ListThesauriResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
