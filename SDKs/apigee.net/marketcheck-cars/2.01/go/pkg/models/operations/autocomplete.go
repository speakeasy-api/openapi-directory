package operations

import (
	"openapi/pkg/models/shared"
)

type AutoCompleteQueryParams struct {
	APIKey                *string              `queryParam:"style=form,explode=true,name=api_key"`
	BodySubtype           *string              `queryParam:"style=form,explode=true,name=body_subtype"`
	BodyType              *string              `queryParam:"style=form,explode=true,name=body_type"`
	CarType               *shared.CarTypeEnum  `queryParam:"style=form,explode=true,name=car_type"`
	City                  *string              `queryParam:"style=form,explode=true,name=city"`
	Country               *shared.CountryEnum  `queryParam:"style=form,explode=true,name=country"`
	Drivetrain            *string              `queryParam:"style=form,explode=true,name=drivetrain"`
	Engine                *string              `queryParam:"style=form,explode=true,name=engine"`
	EngineBlock           *string              `queryParam:"style=form,explode=true,name=engine_block"`
	EngineSize            *string              `queryParam:"style=form,explode=true,name=engine_size"`
	ExteriorColor         *string              `queryParam:"style=form,explode=true,name=exterior_color"`
	Field                 shared.APIKeyEnum2   `queryParam:"style=form,explode=true,name=field"`
	FuelType              *string              `queryParam:"style=form,explode=true,name=fuel_type"`
	IgnoreCase            *bool                `queryParam:"style=form,explode=true,name=ignore_case"`
	IncludeNonVinListings *shared.CarTypeEnum1 `queryParam:"style=form,explode=true,name=include_non_vin_listings"`
	Input                 string               `queryParam:"style=form,explode=true,name=input"`
	InteriorColor         *string              `queryParam:"style=form,explode=true,name=interior_color"`
	Make                  *string              `queryParam:"style=form,explode=true,name=make"`
	Model                 *string              `queryParam:"style=form,explode=true,name=model"`
	SortBy                *shared.CarTypeEnum2 `queryParam:"style=form,explode=true,name=sort_by"`
	State                 *string              `queryParam:"style=form,explode=true,name=state"`
	TermCounts            *bool                `queryParam:"style=form,explode=true,name=term_counts"`
	Transmission          *string              `queryParam:"style=form,explode=true,name=transmission"`
	Trim                  *string              `queryParam:"style=form,explode=true,name=trim"`
	VehicleType           *string              `queryParam:"style=form,explode=true,name=vehicle_type"`
	Year                  *string              `queryParam:"style=form,explode=true,name=year"`
}

type AutoCompleteRequest struct {
	QueryParams AutoCompleteQueryParams
}

type AutoCompleteResponse struct {
	ContentType                string
	Error                      *shared.Error
	SearchAutoCompleteResponse *shared.SearchAutoCompleteResponse
	StatusCode                 int64
}
