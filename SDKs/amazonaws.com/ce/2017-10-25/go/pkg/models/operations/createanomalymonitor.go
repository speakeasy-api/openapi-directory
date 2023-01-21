package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAnomalyMonitorXAmzTargetEnum string

const (
	CreateAnomalyMonitorXAmzTargetEnumAwsInsightsIndexServiceCreateAnomalyMonitor CreateAnomalyMonitorXAmzTargetEnum = "AWSInsightsIndexService.CreateAnomalyMonitor"
)

type CreateAnomalyMonitorHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAnomalyMonitorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateAnomalyMonitorRequest struct {
	Headers CreateAnomalyMonitorHeaders
	Request shared.CreateAnomalyMonitorRequest `request:"mediaType=application/json"`
}

type CreateAnomalyMonitorResponse struct {
	ContentType                  string
	CreateAnomalyMonitorResponse *shared.CreateAnomalyMonitorResponse
	LimitExceededException       *interface{}
	StatusCode                   int64
}
