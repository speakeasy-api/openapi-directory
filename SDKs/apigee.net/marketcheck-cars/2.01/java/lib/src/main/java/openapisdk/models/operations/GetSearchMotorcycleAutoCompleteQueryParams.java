package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchMotorcycleAutoCompleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSearchMotorcycleAutoCompleteQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body_type")
    public String bodyType;
    public GetSearchMotorcycleAutoCompleteQueryParams withBodyType(String bodyType) {
        this.bodyType = bodyType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public GetSearchMotorcycleAutoCompleteQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=color")
    public String color;
    public GetSearchMotorcycleAutoCompleteQueryParams withColor(String color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=drivetrain")
    public String drivetrain;
    public GetSearchMotorcycleAutoCompleteQueryParams withDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine")
    public String engine;
    public GetSearchMotorcycleAutoCompleteQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=field")
    public openapisdk.models.shared.ApiKeyEnum5 field;
    public GetSearchMotorcycleAutoCompleteQueryParams withField(openapisdk.models.shared.ApiKeyEnum5 field) {
        this.field = field;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fuel_type")
    public String fuelType;
    public GetSearchMotorcycleAutoCompleteQueryParams withFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ignore_case")
    public Boolean ignoreCase;
    public GetSearchMotorcycleAutoCompleteQueryParams withIgnoreCase(Boolean ignoreCase) {
        this.ignoreCase = ignoreCase;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=input")
    public String input;
    public GetSearchMotorcycleAutoCompleteQueryParams withInput(String input) {
        this.input = input;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inventory_type")
    public openapisdk.models.shared.InventoryTypeEnum inventoryType;
    public GetSearchMotorcycleAutoCompleteQueryParams withInventoryType(openapisdk.models.shared.InventoryTypeEnum inventoryType) {
        this.inventoryType = inventoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=make")
    public String make;
    public GetSearchMotorcycleAutoCompleteQueryParams withMake(String make) {
        this.make = make;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public GetSearchMotorcycleAutoCompleteQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public openapisdk.models.shared.InventoryTypeEnum1 sortBy;
    public GetSearchMotorcycleAutoCompleteQueryParams withSortBy(openapisdk.models.shared.InventoryTypeEnum1 sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetSearchMotorcycleAutoCompleteQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=term_counts")
    public Boolean termCounts;
    public GetSearchMotorcycleAutoCompleteQueryParams withTermCounts(Boolean termCounts) {
        this.termCounts = termCounts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transmission")
    public String transmission;
    public GetSearchMotorcycleAutoCompleteQueryParams withTransmission(String transmission) {
        this.transmission = transmission;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trim")
    public String trim;
    public GetSearchMotorcycleAutoCompleteQueryParams withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicle_type")
    public String vehicleType;
    public GetSearchMotorcycleAutoCompleteQueryParams withVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public String year;
    public GetSearchMotorcycleAutoCompleteQueryParams withYear(String year) {
        this.year = year;
        return this;
    }
}