package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFaqXAmzTargetEnum string

const (
	DescribeFaqXAmzTargetEnumAwsKendraFrontendServiceDescribeFaq DescribeFaqXAmzTargetEnum = "AWSKendraFrontendService.DescribeFaq"
)

type DescribeFaqHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFaqXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeFaqRequest struct {
	Headers DescribeFaqHeaders
	Request shared.DescribeFaqRequest `request:"mediaType=application/json"`
}

type DescribeFaqResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeFaqResponse       *shared.DescribeFaqResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
