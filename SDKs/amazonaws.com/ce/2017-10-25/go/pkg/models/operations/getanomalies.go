package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnomaliesXAmzTargetEnum string

const (
	GetAnomaliesXAmzTargetEnumAwsInsightsIndexServiceGetAnomalies GetAnomaliesXAmzTargetEnum = "AWSInsightsIndexService.GetAnomalies"
)

type GetAnomaliesHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAnomaliesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetAnomaliesRequest struct {
	Headers GetAnomaliesHeaders
	Request shared.GetAnomaliesRequest `request:"mediaType=application/json"`
}

type GetAnomaliesResponse struct {
	ContentType               string
	GetAnomaliesResponse      *shared.GetAnomaliesResponse
	InvalidNextTokenException *interface{}
	LimitExceededException    *interface{}
	StatusCode                int64
}
