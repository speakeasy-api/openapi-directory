package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoCompleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public AutoCompleteQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body_subtype")
    public String bodySubtype;
    public AutoCompleteQueryParams withBodySubtype(String bodySubtype) {
        this.bodySubtype = bodySubtype;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body_type")
    public String bodyType;
    public AutoCompleteQueryParams withBodyType(String bodyType) {
        this.bodyType = bodyType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=car_type")
    public openapisdk.models.shared.CarTypeEnum carType;
    public AutoCompleteQueryParams withCarType(openapisdk.models.shared.CarTypeEnum carType) {
        this.carType = carType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public AutoCompleteQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public openapisdk.models.shared.CountryEnum country;
    public AutoCompleteQueryParams withCountry(openapisdk.models.shared.CountryEnum country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=drivetrain")
    public String drivetrain;
    public AutoCompleteQueryParams withDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine")
    public String engine;
    public AutoCompleteQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine_block")
    public String engineBlock;
    public AutoCompleteQueryParams withEngineBlock(String engineBlock) {
        this.engineBlock = engineBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine_size")
    public String engineSize;
    public AutoCompleteQueryParams withEngineSize(String engineSize) {
        this.engineSize = engineSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exterior_color")
    public String exteriorColor;
    public AutoCompleteQueryParams withExteriorColor(String exteriorColor) {
        this.exteriorColor = exteriorColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=field")
    public openapisdk.models.shared.ApiKeyEnum2 field;
    public AutoCompleteQueryParams withField(openapisdk.models.shared.ApiKeyEnum2 field) {
        this.field = field;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fuel_type")
    public String fuelType;
    public AutoCompleteQueryParams withFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ignore_case")
    public Boolean ignoreCase;
    public AutoCompleteQueryParams withIgnoreCase(Boolean ignoreCase) {
        this.ignoreCase = ignoreCase;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_non_vin_listings")
    public openapisdk.models.shared.CarTypeEnum1 includeNonVinListings;
    public AutoCompleteQueryParams withIncludeNonVinListings(openapisdk.models.shared.CarTypeEnum1 includeNonVinListings) {
        this.includeNonVinListings = includeNonVinListings;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=input")
    public String input;
    public AutoCompleteQueryParams withInput(String input) {
        this.input = input;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interior_color")
    public String interiorColor;
    public AutoCompleteQueryParams withInteriorColor(String interiorColor) {
        this.interiorColor = interiorColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=make")
    public String make;
    public AutoCompleteQueryParams withMake(String make) {
        this.make = make;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public AutoCompleteQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public openapisdk.models.shared.CarTypeEnum2 sortBy;
    public AutoCompleteQueryParams withSortBy(openapisdk.models.shared.CarTypeEnum2 sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public AutoCompleteQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=term_counts")
    public Boolean termCounts;
    public AutoCompleteQueryParams withTermCounts(Boolean termCounts) {
        this.termCounts = termCounts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transmission")
    public String transmission;
    public AutoCompleteQueryParams withTransmission(String transmission) {
        this.transmission = transmission;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trim")
    public String trim;
    public AutoCompleteQueryParams withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicle_type")
    public String vehicleType;
    public AutoCompleteQueryParams withVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public String year;
    public AutoCompleteQueryParams withYear(String year) {
        this.year = year;
        return this;
    }
}