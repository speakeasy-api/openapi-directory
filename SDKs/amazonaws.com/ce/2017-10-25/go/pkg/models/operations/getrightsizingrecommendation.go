package operations

import (
	"openapi/pkg/models/shared"
)

type GetRightsizingRecommendationXAmzTargetEnum string

const (
	GetRightsizingRecommendationXAmzTargetEnumAwsInsightsIndexServiceGetRightsizingRecommendation GetRightsizingRecommendationXAmzTargetEnum = "AWSInsightsIndexService.GetRightsizingRecommendation"
)

type GetRightsizingRecommendationHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRightsizingRecommendationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetRightsizingRecommendationRequest struct {
	Headers GetRightsizingRecommendationHeaders
	Request shared.GetRightsizingRecommendationRequest `request:"mediaType=application/json"`
}

type GetRightsizingRecommendationResponse struct {
	ContentType                          string
	GetRightsizingRecommendationResponse *shared.GetRightsizingRecommendationResponse
	InvalidNextTokenException            *interface{}
	LimitExceededException               *interface{}
	StatusCode                           int64
}
