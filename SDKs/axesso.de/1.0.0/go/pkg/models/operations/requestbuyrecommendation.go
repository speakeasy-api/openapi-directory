package operations

import (
	"openapi/pkg/models/shared"
)

type RequestBuyRecommendationQueryParams struct {
	URL string `queryParam:"style=form,explode=true,name=url"`
}

type RequestBuyRecommendationRequest struct {
	QueryParams RequestBuyRecommendationQueryParams
}

type RequestBuyRecommendationResponse struct {
	BuyRecommendationResponse *shared.BuyRecommendationResponse
	ContentType               string
	StatusCode                int64
}
