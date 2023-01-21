package operations

import (
	"openapi/pkg/models/shared"
)

type GetReservationCoverageXAmzTargetEnum string

const (
	GetReservationCoverageXAmzTargetEnumAwsInsightsIndexServiceGetReservationCoverage GetReservationCoverageXAmzTargetEnum = "AWSInsightsIndexService.GetReservationCoverage"
)

type GetReservationCoverageHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetReservationCoverageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetReservationCoverageRequest struct {
	Headers GetReservationCoverageHeaders
	Request shared.GetReservationCoverageRequest `request:"mediaType=application/json"`
}

type GetReservationCoverageResponse struct {
	ContentType                    string
	DataUnavailableException       *interface{}
	GetReservationCoverageResponse *shared.GetReservationCoverageResponse
	InvalidNextTokenException      *interface{}
	LimitExceededException         *interface{}
	StatusCode                     int64
}
