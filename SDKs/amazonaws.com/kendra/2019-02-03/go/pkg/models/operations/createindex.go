package operations

import (
	"openapi/pkg/models/shared"
)

type CreateIndexXAmzTargetEnum string

const (
	CreateIndexXAmzTargetEnumAwsKendraFrontendServiceCreateIndex CreateIndexXAmzTargetEnum = "AWSKendraFrontendService.CreateIndex"
)

type CreateIndexHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateIndexXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateIndexRequest struct {
	Headers CreateIndexHeaders
	Request shared.CreateIndexRequest `request:"mediaType=application/json"`
}

type CreateIndexResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateIndexResponse           *shared.CreateIndexResponse
	InternalServerException       *interface{}
	ResourceAlreadyExistException *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
