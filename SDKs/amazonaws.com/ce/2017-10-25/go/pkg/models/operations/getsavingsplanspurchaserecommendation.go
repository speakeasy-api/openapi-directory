package operations

import (
	"openapi/pkg/models/shared"
)

type GetSavingsPlansPurchaseRecommendationXAmzTargetEnum string

const (
	GetSavingsPlansPurchaseRecommendationXAmzTargetEnumAwsInsightsIndexServiceGetSavingsPlansPurchaseRecommendation GetSavingsPlansPurchaseRecommendationXAmzTargetEnum = "AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation"
)

type GetSavingsPlansPurchaseRecommendationHeaders struct {
	XAmzAlgorithm     *string                                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSavingsPlansPurchaseRecommendationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetSavingsPlansPurchaseRecommendationRequest struct {
	Headers GetSavingsPlansPurchaseRecommendationHeaders
	Request shared.GetSavingsPlansPurchaseRecommendationRequest `request:"mediaType=application/json"`
}

type GetSavingsPlansPurchaseRecommendationResponse struct {
	ContentType                                   string
	GetSavingsPlansPurchaseRecommendationResponse *shared.GetSavingsPlansPurchaseRecommendationResponse
	InvalidNextTokenException                     *interface{}
	LimitExceededException                        *interface{}
	StatusCode                                    int64
}
