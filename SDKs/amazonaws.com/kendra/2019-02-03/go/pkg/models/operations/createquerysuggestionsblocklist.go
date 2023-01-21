package operations

import (
	"openapi/pkg/models/shared"
)

type CreateQuerySuggestionsBlockListXAmzTargetEnum string

const (
	CreateQuerySuggestionsBlockListXAmzTargetEnumAwsKendraFrontendServiceCreateQuerySuggestionsBlockList CreateQuerySuggestionsBlockListXAmzTargetEnum = "AWSKendraFrontendService.CreateQuerySuggestionsBlockList"
)

type CreateQuerySuggestionsBlockListHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateQuerySuggestionsBlockListXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateQuerySuggestionsBlockListRequest struct {
	Headers CreateQuerySuggestionsBlockListHeaders
	Request shared.CreateQuerySuggestionsBlockListRequest `request:"mediaType=application/json"`
}

type CreateQuerySuggestionsBlockListResponse struct {
	AccessDeniedException                   *interface{}
	ConflictException                       *interface{}
	ContentType                             string
	CreateQuerySuggestionsBlockListResponse *shared.CreateQuerySuggestionsBlockListResponse
	InternalServerException                 *interface{}
	ResourceNotFoundException               *interface{}
	ServiceQuotaExceededException           *interface{}
	StatusCode                              int64
	ThrottlingException                     *interface{}
	ValidationException                     *interface{}
}
