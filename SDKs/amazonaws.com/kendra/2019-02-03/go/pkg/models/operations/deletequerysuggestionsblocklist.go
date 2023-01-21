package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteQuerySuggestionsBlockListXAmzTargetEnum string

const (
	DeleteQuerySuggestionsBlockListXAmzTargetEnumAwsKendraFrontendServiceDeleteQuerySuggestionsBlockList DeleteQuerySuggestionsBlockListXAmzTargetEnum = "AWSKendraFrontendService.DeleteQuerySuggestionsBlockList"
)

type DeleteQuerySuggestionsBlockListHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteQuerySuggestionsBlockListXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteQuerySuggestionsBlockListRequest struct {
	Headers DeleteQuerySuggestionsBlockListHeaders
	Request shared.DeleteQuerySuggestionsBlockListRequest `request:"mediaType=application/json"`
}

type DeleteQuerySuggestionsBlockListResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
