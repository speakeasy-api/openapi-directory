package operations

import (
	"openapi/pkg/models/shared"
)

type StopDataSourceSyncJobXAmzTargetEnum string

const (
	StopDataSourceSyncJobXAmzTargetEnumAwsKendraFrontendServiceStopDataSourceSyncJob StopDataSourceSyncJobXAmzTargetEnum = "AWSKendraFrontendService.StopDataSourceSyncJob"
)

type StopDataSourceSyncJobHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopDataSourceSyncJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopDataSourceSyncJobRequest struct {
	Headers StopDataSourceSyncJobHeaders
	Request shared.StopDataSourceSyncJobRequest `request:"mediaType=application/json"`
}

type StopDataSourceSyncJobResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
