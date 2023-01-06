package operations

import (
	"openapi/pkg/models/shared"
)

type GetDailyStatsQueryParams struct {
	APIKey      *string             `queryParam:"style=form,explode=true,name=api_key"`
	CarType     *shared.APIKeyEnum  `queryParam:"style=form,explode=true,name=car_type"`
	CityState   *string             `queryParam:"style=form,explode=true,name=city_state"`
	Country     *shared.APIKeyEnum8 `queryParam:"style=form,explode=true,name=country"`
	State       *string             `queryParam:"style=form,explode=true,name=state"`
	TaxonomyVin *string             `queryParam:"style=form,explode=true,name=taxonomy_vin"`
	Vin         *string             `queryParam:"style=form,explode=true,name=vin"`
	Ymm         *string             `queryParam:"style=form,explode=true,name=ymm"`
	Ymmt        *string             `queryParam:"style=form,explode=true,name=ymmt"`
}

type GetDailyStatsRequest struct {
	QueryParams GetDailyStatsQueryParams
}

type GetDailyStatsResponse struct {
	ContentType string
	DailyStats  *shared.DailyStats
	Error       *shared.Error
	StatusCode  int64
}
