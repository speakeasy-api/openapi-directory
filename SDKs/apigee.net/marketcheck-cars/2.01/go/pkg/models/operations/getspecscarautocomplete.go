package operations

import (
	"openapi/pkg/models/shared"
)

type GetSpecsCarAutoCompleteQueryParams struct {
	APIKey       *string            `queryParam:"style=form,explode=true,name=api_key"`
	BodySubtype  *string            `queryParam:"style=form,explode=true,name=body_subtype"`
	BodyType     *string            `queryParam:"style=form,explode=true,name=body_type"`
	Drivetrain   *string            `queryParam:"style=form,explode=true,name=drivetrain"`
	Engine       *string            `queryParam:"style=form,explode=true,name=engine"`
	EngineBlock  *string            `queryParam:"style=form,explode=true,name=engine_block"`
	EngineSize   *string            `queryParam:"style=form,explode=true,name=engine_size"`
	Field        shared.APIKeyEnum7 `queryParam:"style=form,explode=true,name=field"`
	FuelType     *string            `queryParam:"style=form,explode=true,name=fuel_type"`
	IgnoreCase   *bool              `queryParam:"style=form,explode=true,name=ignore_case"`
	Input        string             `queryParam:"style=form,explode=true,name=input"`
	Make         *string            `queryParam:"style=form,explode=true,name=make"`
	Model        *string            `queryParam:"style=form,explode=true,name=model"`
	Transmission *string            `queryParam:"style=form,explode=true,name=transmission"`
	Trim         *string            `queryParam:"style=form,explode=true,name=trim"`
	VehicleType  *string            `queryParam:"style=form,explode=true,name=vehicle_type"`
	Year         *string            `queryParam:"style=form,explode=true,name=year"`
}

type GetSpecsCarAutoCompleteRequest struct {
	QueryParams GetSpecsCarAutoCompleteQueryParams
}

type GetSpecsCarAutoCompleteResponse struct {
	ContentType               string
	Error                     *shared.Error
	SpecsAutoCompleteResponse *shared.SpecsAutoCompleteResponse
	StatusCode                int64
}
