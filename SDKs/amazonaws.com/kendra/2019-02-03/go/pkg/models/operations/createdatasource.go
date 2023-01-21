package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataSourceXAmzTargetEnum string

const (
	CreateDataSourceXAmzTargetEnumAwsKendraFrontendServiceCreateDataSource CreateDataSourceXAmzTargetEnum = "AWSKendraFrontendService.CreateDataSource"
)

type CreateDataSourceHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDataSourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateDataSourceRequest struct {
	Headers CreateDataSourceHeaders
	Request shared.CreateDataSourceRequest `request:"mediaType=application/json"`
}

type CreateDataSourceResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateDataSourceResponse      *shared.CreateDataSourceResponse
	InternalServerException       *interface{}
	ResourceAlreadyExistException *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
