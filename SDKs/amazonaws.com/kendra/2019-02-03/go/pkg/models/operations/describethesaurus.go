package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeThesaurusXAmzTargetEnum string

const (
	DescribeThesaurusXAmzTargetEnumAwsKendraFrontendServiceDescribeThesaurus DescribeThesaurusXAmzTargetEnum = "AWSKendraFrontendService.DescribeThesaurus"
)

type DescribeThesaurusHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeThesaurusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeThesaurusRequest struct {
	Headers DescribeThesaurusHeaders
	Request shared.DescribeThesaurusRequest `request:"mediaType=application/json"`
}

type DescribeThesaurusResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeThesaurusResponse *shared.DescribeThesaurusResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
