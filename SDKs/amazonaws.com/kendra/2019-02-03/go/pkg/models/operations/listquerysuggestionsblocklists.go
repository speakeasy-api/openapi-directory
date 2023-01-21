package operations

import (
	"openapi/pkg/models/shared"
)

type ListQuerySuggestionsBlockListsXAmzTargetEnum string

const (
	ListQuerySuggestionsBlockListsXAmzTargetEnumAwsKendraFrontendServiceListQuerySuggestionsBlockLists ListQuerySuggestionsBlockListsXAmzTargetEnum = "AWSKendraFrontendService.ListQuerySuggestionsBlockLists"
)

type ListQuerySuggestionsBlockListsHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListQuerySuggestionsBlockListsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListQuerySuggestionsBlockListsRequest struct {
	Headers ListQuerySuggestionsBlockListsHeaders
	Request shared.ListQuerySuggestionsBlockListsRequest `request:"mediaType=application/json"`
}

type ListQuerySuggestionsBlockListsResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalServerException                *interface{}
	ListQuerySuggestionsBlockListsResponse *shared.ListQuerySuggestionsBlockListsResponse
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
	ValidationException                    *interface{}
}
