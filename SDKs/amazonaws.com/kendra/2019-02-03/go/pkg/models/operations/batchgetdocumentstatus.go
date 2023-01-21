package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetDocumentStatusXAmzTargetEnum string

const (
	BatchGetDocumentStatusXAmzTargetEnumAwsKendraFrontendServiceBatchGetDocumentStatus BatchGetDocumentStatusXAmzTargetEnum = "AWSKendraFrontendService.BatchGetDocumentStatus"
)

type BatchGetDocumentStatusHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetDocumentStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type BatchGetDocumentStatusRequest struct {
	Headers BatchGetDocumentStatusHeaders
	Request shared.BatchGetDocumentStatusRequest `request:"mediaType=application/json"`
}

type BatchGetDocumentStatusResponse struct {
	AccessDeniedException          *interface{}
	BatchGetDocumentStatusResponse *shared.BatchGetDocumentStatusResponse
	ConflictException              *interface{}
	ContentType                    string
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
