package operations

import (
	"openapi/pkg/models/shared"
)

type QueryXAmzTargetEnum string

const (
	QueryXAmzTargetEnumAwsKendraFrontendServiceQuery QueryXAmzTargetEnum = "AWSKendraFrontendService.Query"
)

type QueryHeaders struct {
	XAmzAlgorithm     *string             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        QueryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type QueryRequest struct {
	Headers QueryHeaders
	Request shared.QueryRequest `request:"mediaType=application/json"`
}

type QueryResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	QueryResult                   *shared.QueryResult
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
