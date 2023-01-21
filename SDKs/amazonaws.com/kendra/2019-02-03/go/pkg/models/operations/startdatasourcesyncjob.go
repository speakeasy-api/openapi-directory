package operations

import (
	"openapi/pkg/models/shared"
)

type StartDataSourceSyncJobXAmzTargetEnum string

const (
	StartDataSourceSyncJobXAmzTargetEnumAwsKendraFrontendServiceStartDataSourceSyncJob StartDataSourceSyncJobXAmzTargetEnum = "AWSKendraFrontendService.StartDataSourceSyncJob"
)

type StartDataSourceSyncJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartDataSourceSyncJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartDataSourceSyncJobRequest struct {
	Headers StartDataSourceSyncJobHeaders
	Request shared.StartDataSourceSyncJobRequest `request:"mediaType=application/json"`
}

type StartDataSourceSyncJobResponse struct {
	AccessDeniedException          *interface{}
	ConflictException              *interface{}
	ContentType                    string
	InternalServerException        *interface{}
	ResourceInUseException         *interface{}
	ResourceNotFoundException      *interface{}
	StartDataSourceSyncJobResponse *shared.StartDataSourceSyncJobResponse
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
