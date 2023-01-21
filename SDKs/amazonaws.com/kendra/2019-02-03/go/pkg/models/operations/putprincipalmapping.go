package operations

import (
	"openapi/pkg/models/shared"
)

type PutPrincipalMappingXAmzTargetEnum string

const (
	PutPrincipalMappingXAmzTargetEnumAwsKendraFrontendServicePutPrincipalMapping PutPrincipalMappingXAmzTargetEnum = "AWSKendraFrontendService.PutPrincipalMapping"
)

type PutPrincipalMappingHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutPrincipalMappingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutPrincipalMappingRequest struct {
	Headers PutPrincipalMappingHeaders
	Request shared.PutPrincipalMappingRequest `request:"mediaType=application/json"`
}

type PutPrincipalMappingResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
