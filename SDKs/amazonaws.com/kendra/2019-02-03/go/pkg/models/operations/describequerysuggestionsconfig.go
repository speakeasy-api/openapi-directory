package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeQuerySuggestionsConfigXAmzTargetEnum string

const (
	DescribeQuerySuggestionsConfigXAmzTargetEnumAwsKendraFrontendServiceDescribeQuerySuggestionsConfig DescribeQuerySuggestionsConfigXAmzTargetEnum = "AWSKendraFrontendService.DescribeQuerySuggestionsConfig"
)

type DescribeQuerySuggestionsConfigHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeQuerySuggestionsConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeQuerySuggestionsConfigRequest struct {
	Headers DescribeQuerySuggestionsConfigHeaders
	Request shared.DescribeQuerySuggestionsConfigRequest `request:"mediaType=application/json"`
}

type DescribeQuerySuggestionsConfigResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DescribeQuerySuggestionsConfigResponse *shared.DescribeQuerySuggestionsConfigResponse
	InternalServerException                *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
	ValidationException                    *interface{}
}
