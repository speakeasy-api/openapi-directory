package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnomalyMonitorsXAmzTargetEnum string

const (
	GetAnomalyMonitorsXAmzTargetEnumAwsInsightsIndexServiceGetAnomalyMonitors GetAnomalyMonitorsXAmzTargetEnum = "AWSInsightsIndexService.GetAnomalyMonitors"
)

type GetAnomalyMonitorsHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAnomalyMonitorsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetAnomalyMonitorsRequest struct {
	Headers GetAnomalyMonitorsHeaders
	Request shared.GetAnomalyMonitorsRequest `request:"mediaType=application/json"`
}

type GetAnomalyMonitorsResponse struct {
	ContentType                string
	GetAnomalyMonitorsResponse *shared.GetAnomalyMonitorsResponse
	InvalidNextTokenException  *interface{}
	LimitExceededException     *interface{}
	StatusCode                 int64
	UnknownMonitorException    *interface{}
}
