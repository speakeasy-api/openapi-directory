package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeleteDocumentXAmzTargetEnum string

const (
	BatchDeleteDocumentXAmzTargetEnumAwsKendraFrontendServiceBatchDeleteDocument BatchDeleteDocumentXAmzTargetEnum = "AWSKendraFrontendService.BatchDeleteDocument"
)

type BatchDeleteDocumentHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDeleteDocumentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type BatchDeleteDocumentRequest struct {
	Headers BatchDeleteDocumentHeaders
	Request shared.BatchDeleteDocumentRequest `request:"mediaType=application/json"`
}

type BatchDeleteDocumentResponse struct {
	AccessDeniedException       *interface{}
	BatchDeleteDocumentResponse *shared.BatchDeleteDocumentResponse
	ConflictException           *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
