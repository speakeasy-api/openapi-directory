package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeIndexXAmzTargetEnum string

const (
	DescribeIndexXAmzTargetEnumAwsKendraFrontendServiceDescribeIndex DescribeIndexXAmzTargetEnum = "AWSKendraFrontendService.DescribeIndex"
)

type DescribeIndexHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeIndexXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeIndexRequest struct {
	Headers DescribeIndexHeaders
	Request shared.DescribeIndexRequest `request:"mediaType=application/json"`
}

type DescribeIndexResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeIndexResponse     *shared.DescribeIndexResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
