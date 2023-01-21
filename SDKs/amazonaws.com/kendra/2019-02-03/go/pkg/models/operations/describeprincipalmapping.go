package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePrincipalMappingXAmzTargetEnum string

const (
	DescribePrincipalMappingXAmzTargetEnumAwsKendraFrontendServiceDescribePrincipalMapping DescribePrincipalMappingXAmzTargetEnum = "AWSKendraFrontendService.DescribePrincipalMapping"
)

type DescribePrincipalMappingHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePrincipalMappingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribePrincipalMappingRequest struct {
	Headers DescribePrincipalMappingHeaders
	Request shared.DescribePrincipalMappingRequest `request:"mediaType=application/json"`
}

type DescribePrincipalMappingResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	DescribePrincipalMappingResponse *shared.DescribePrincipalMappingResponse
	InternalServerException          *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	ValidationException              *interface{}
}
