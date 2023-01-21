package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDataSourceXAmzTargetEnum string

const (
	UpdateDataSourceXAmzTargetEnumAwsKendraFrontendServiceUpdateDataSource UpdateDataSourceXAmzTargetEnum = "AWSKendraFrontendService.UpdateDataSource"
)

type UpdateDataSourceHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDataSourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateDataSourceRequest struct {
	Headers UpdateDataSourceHeaders
	Request shared.UpdateDataSourceRequest `request:"mediaType=application/json"`
}

type UpdateDataSourceResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
