package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteThesaurusXAmzTargetEnum string

const (
	DeleteThesaurusXAmzTargetEnumAwsKendraFrontendServiceDeleteThesaurus DeleteThesaurusXAmzTargetEnum = "AWSKendraFrontendService.DeleteThesaurus"
)

type DeleteThesaurusHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteThesaurusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteThesaurusRequest struct {
	Headers DeleteThesaurusHeaders
	Request shared.DeleteThesaurusRequest `request:"mediaType=application/json"`
}

type DeleteThesaurusResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
