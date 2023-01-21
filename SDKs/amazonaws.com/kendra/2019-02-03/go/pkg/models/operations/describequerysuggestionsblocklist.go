package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeQuerySuggestionsBlockListXAmzTargetEnum string

const (
	DescribeQuerySuggestionsBlockListXAmzTargetEnumAwsKendraFrontendServiceDescribeQuerySuggestionsBlockList DescribeQuerySuggestionsBlockListXAmzTargetEnum = "AWSKendraFrontendService.DescribeQuerySuggestionsBlockList"
)

type DescribeQuerySuggestionsBlockListHeaders struct {
	XAmzAlgorithm     *string                                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeQuerySuggestionsBlockListXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeQuerySuggestionsBlockListRequest struct {
	Headers DescribeQuerySuggestionsBlockListHeaders
	Request shared.DescribeQuerySuggestionsBlockListRequest `request:"mediaType=application/json"`
}

type DescribeQuerySuggestionsBlockListResponse struct {
	AccessDeniedException                     *interface{}
	ContentType                               string
	DescribeQuerySuggestionsBlockListResponse *shared.DescribeQuerySuggestionsBlockListResponse
	InternalServerException                   *interface{}
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
	ThrottlingException                       *interface{}
	ValidationException                       *interface{}
}
