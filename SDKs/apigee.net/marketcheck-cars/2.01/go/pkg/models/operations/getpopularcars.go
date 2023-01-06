package operations

import (
	"openapi/pkg/models/shared"
)

type GetPopularCarsQueryParams struct {
	APIKey    *string             `queryParam:"style=form,explode=true,name=api_key"`
	CarType   shared.APIKeyEnum   `queryParam:"style=form,explode=true,name=car_type"`
	CityState *string             `queryParam:"style=form,explode=true,name=city_state"`
	Country   *shared.APIKeyEnum1 `queryParam:"style=form,explode=true,name=country"`
	State     *string             `queryParam:"style=form,explode=true,name=state"`
}

type GetPopularCarsRequest struct {
	QueryParams GetPopularCarsQueryParams
}

type GetPopularCarsResponse struct {
	ContentType string
	Error       *shared.Error
	PopularCars *shared.PopularCars
	StatusCode  int64
}
