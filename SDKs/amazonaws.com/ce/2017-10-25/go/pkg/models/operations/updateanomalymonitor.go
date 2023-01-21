package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAnomalyMonitorXAmzTargetEnum string

const (
	UpdateAnomalyMonitorXAmzTargetEnumAwsInsightsIndexServiceUpdateAnomalyMonitor UpdateAnomalyMonitorXAmzTargetEnum = "AWSInsightsIndexService.UpdateAnomalyMonitor"
)

type UpdateAnomalyMonitorHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAnomalyMonitorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateAnomalyMonitorRequest struct {
	Headers UpdateAnomalyMonitorHeaders
	Request shared.UpdateAnomalyMonitorRequest `request:"mediaType=application/json"`
}

type UpdateAnomalyMonitorResponse struct {
	ContentType                  string
	LimitExceededException       *interface{}
	StatusCode                   int64
	UnknownMonitorException      *interface{}
	UpdateAnomalyMonitorResponse *shared.UpdateAnomalyMonitorResponse
}
