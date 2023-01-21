package operations

import (
	"openapi/pkg/models/shared"
)

type ListDataSourceSyncJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDataSourceSyncJobsXAmzTargetEnum string

const (
	ListDataSourceSyncJobsXAmzTargetEnumAwsKendraFrontendServiceListDataSourceSyncJobs ListDataSourceSyncJobsXAmzTargetEnum = "AWSKendraFrontendService.ListDataSourceSyncJobs"
)

type ListDataSourceSyncJobsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDataSourceSyncJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListDataSourceSyncJobsRequest struct {
	QueryParams ListDataSourceSyncJobsQueryParams
	Headers     ListDataSourceSyncJobsHeaders
	Request     shared.ListDataSourceSyncJobsRequest `request:"mediaType=application/json"`
}

type ListDataSourceSyncJobsResponse struct {
	AccessDeniedException          *interface{}
	ConflictException              *interface{}
	ContentType                    string
	InternalServerException        *interface{}
	ListDataSourceSyncJobsResponse *shared.ListDataSourceSyncJobsResponse
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
