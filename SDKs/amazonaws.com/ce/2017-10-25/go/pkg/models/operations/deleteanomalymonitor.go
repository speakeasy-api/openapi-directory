package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAnomalyMonitorXAmzTargetEnum string

const (
	DeleteAnomalyMonitorXAmzTargetEnumAwsInsightsIndexServiceDeleteAnomalyMonitor DeleteAnomalyMonitorXAmzTargetEnum = "AWSInsightsIndexService.DeleteAnomalyMonitor"
)

type DeleteAnomalyMonitorHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAnomalyMonitorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteAnomalyMonitorRequest struct {
	Headers DeleteAnomalyMonitorHeaders
	Request shared.DeleteAnomalyMonitorRequest `request:"mediaType=application/json"`
}

type DeleteAnomalyMonitorResponse struct {
	ContentType                  string
	DeleteAnomalyMonitorResponse map[string]interface{}
	LimitExceededException       *interface{}
	StatusCode                   int64
	UnknownMonitorException      *interface{}
}
