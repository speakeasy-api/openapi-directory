package operations

import (
	"openapi/pkg/models/shared"
)

type GetReservationUtilizationXAmzTargetEnum string

const (
	GetReservationUtilizationXAmzTargetEnumAwsInsightsIndexServiceGetReservationUtilization GetReservationUtilizationXAmzTargetEnum = "AWSInsightsIndexService.GetReservationUtilization"
)

type GetReservationUtilizationHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetReservationUtilizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetReservationUtilizationRequest struct {
	Headers GetReservationUtilizationHeaders
	Request shared.GetReservationUtilizationRequest `request:"mediaType=application/json"`
}

type GetReservationUtilizationResponse struct {
	ContentType                       string
	DataUnavailableException          *interface{}
	GetReservationUtilizationResponse *shared.GetReservationUtilizationResponse
	InvalidNextTokenException         *interface{}
	LimitExceededException            *interface{}
	StatusCode                        int64
}
