package operations

import (
	"openapi/pkg/models/shared"
)

type GetReservationPurchaseRecommendationXAmzTargetEnum string

const (
	GetReservationPurchaseRecommendationXAmzTargetEnumAwsInsightsIndexServiceGetReservationPurchaseRecommendation GetReservationPurchaseRecommendationXAmzTargetEnum = "AWSInsightsIndexService.GetReservationPurchaseRecommendation"
)

type GetReservationPurchaseRecommendationHeaders struct {
	XAmzAlgorithm     *string                                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetReservationPurchaseRecommendationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetReservationPurchaseRecommendationRequest struct {
	Headers GetReservationPurchaseRecommendationHeaders
	Request shared.GetReservationPurchaseRecommendationRequest `request:"mediaType=application/json"`
}

type GetReservationPurchaseRecommendationResponse struct {
	ContentType                                  string
	DataUnavailableException                     *interface{}
	GetReservationPurchaseRecommendationResponse *shared.GetReservationPurchaseRecommendationResponse
	InvalidNextTokenException                    *interface{}
	LimitExceededException                       *interface{}
	StatusCode                                   int64
}
