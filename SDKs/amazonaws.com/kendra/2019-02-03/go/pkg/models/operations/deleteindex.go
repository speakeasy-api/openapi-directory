package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteIndexXAmzTargetEnum string

const (
	DeleteIndexXAmzTargetEnumAwsKendraFrontendServiceDeleteIndex DeleteIndexXAmzTargetEnum = "AWSKendraFrontendService.DeleteIndex"
)

type DeleteIndexHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteIndexXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteIndexRequest struct {
	Headers DeleteIndexHeaders
	Request shared.DeleteIndexRequest `request:"mediaType=application/json"`
}

type DeleteIndexResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
