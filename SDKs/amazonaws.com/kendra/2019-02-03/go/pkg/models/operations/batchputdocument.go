package operations

import (
	"openapi/pkg/models/shared"
)

type BatchPutDocumentXAmzTargetEnum string

const (
	BatchPutDocumentXAmzTargetEnumAwsKendraFrontendServiceBatchPutDocument BatchPutDocumentXAmzTargetEnum = "AWSKendraFrontendService.BatchPutDocument"
)

type BatchPutDocumentHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchPutDocumentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type BatchPutDocumentRequest struct {
	Headers BatchPutDocumentHeaders
	Request shared.BatchPutDocumentRequest `request:"mediaType=application/json"`
}

type BatchPutDocumentResponse struct {
	AccessDeniedException         *interface{}
	BatchPutDocumentResponse      *shared.BatchPutDocumentResponse
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
