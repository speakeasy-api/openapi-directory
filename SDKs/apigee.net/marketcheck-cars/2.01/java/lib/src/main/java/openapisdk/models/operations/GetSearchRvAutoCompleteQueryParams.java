package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchRvAutoCompleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSearchRvAutoCompleteQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body_type")
    public String bodyType;
    public GetSearchRvAutoCompleteQueryParams withBodyType(String bodyType) {
        this.bodyType = bodyType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public GetSearchRvAutoCompleteQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=color")
    public String color;
    public GetSearchRvAutoCompleteQueryParams withColor(String color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=drivetrain")
    public String drivetrain;
    public GetSearchRvAutoCompleteQueryParams withDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine")
    public String engine;
    public GetSearchRvAutoCompleteQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=field")
    public openapisdk.models.shared.ApiKeyEnum6 field;
    public GetSearchRvAutoCompleteQueryParams withField(openapisdk.models.shared.ApiKeyEnum6 field) {
        this.field = field;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fuel_type")
    public String fuelType;
    public GetSearchRvAutoCompleteQueryParams withFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ignore_case")
    public Boolean ignoreCase;
    public GetSearchRvAutoCompleteQueryParams withIgnoreCase(Boolean ignoreCase) {
        this.ignoreCase = ignoreCase;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=input")
    public String input;
    public GetSearchRvAutoCompleteQueryParams withInput(String input) {
        this.input = input;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inventory_type")
    public openapisdk.models.shared.InventoryTypeEnum inventoryType;
    public GetSearchRvAutoCompleteQueryParams withInventoryType(openapisdk.models.shared.InventoryTypeEnum inventoryType) {
        this.inventoryType = inventoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=make")
    public String make;
    public GetSearchRvAutoCompleteQueryParams withMake(String make) {
        this.make = make;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public GetSearchRvAutoCompleteQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public openapisdk.models.shared.InventoryTypeEnum1 sortBy;
    public GetSearchRvAutoCompleteQueryParams withSortBy(openapisdk.models.shared.InventoryTypeEnum1 sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetSearchRvAutoCompleteQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=term_counts")
    public Boolean termCounts;
    public GetSearchRvAutoCompleteQueryParams withTermCounts(Boolean termCounts) {
        this.termCounts = termCounts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transmission")
    public String transmission;
    public GetSearchRvAutoCompleteQueryParams withTransmission(String transmission) {
        this.transmission = transmission;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trim")
    public String trim;
    public GetSearchRvAutoCompleteQueryParams withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicle_type")
    public String vehicleType;
    public GetSearchRvAutoCompleteQueryParams withVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public String year;
    public GetSearchRvAutoCompleteQueryParams withYear(String year) {
        this.year = year;
        return this;
    }
}