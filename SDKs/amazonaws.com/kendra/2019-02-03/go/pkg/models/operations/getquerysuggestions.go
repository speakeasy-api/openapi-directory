package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuerySuggestionsXAmzTargetEnum string

const (
	GetQuerySuggestionsXAmzTargetEnumAwsKendraFrontendServiceGetQuerySuggestions GetQuerySuggestionsXAmzTargetEnum = "AWSKendraFrontendService.GetQuerySuggestions"
)

type GetQuerySuggestionsHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetQuerySuggestionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetQuerySuggestionsRequest struct {
	Headers GetQuerySuggestionsHeaders
	Request shared.GetQuerySuggestionsRequest `request:"mediaType=application/json"`
}

type GetQuerySuggestionsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	GetQuerySuggestionsResponse   *shared.GetQuerySuggestionsResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
