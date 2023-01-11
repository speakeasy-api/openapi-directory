package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchMotorcycleActiveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSearchMotorcycleActiveQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body_type")
    public String bodyType;
    public GetSearchMotorcycleActiveQueryParams withBodyType(String bodyType) {
        this.bodyType = bodyType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public GetSearchMotorcycleActiveQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=color")
    public String color;
    public GetSearchMotorcycleActiveQueryParams withColor(String color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cylinders")
    public String cylinders;
    public GetSearchMotorcycleActiveQueryParams withCylinders(String cylinders) {
        this.cylinders = cylinders;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealer_id")
    public String dealerId;
    public GetSearchMotorcycleActiveQueryParams withDealerId(String dealerId) {
        this.dealerId = dealerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=drivetrain")
    public String drivetrain;
    public GetSearchMotorcycleActiveQueryParams withDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine")
    public String engine;
    public GetSearchMotorcycleActiveQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_sort")
    public openapisdk.models.shared.FacetSortEnum facetSort;
    public GetSearchMotorcycleActiveQueryParams withFacetSort(openapisdk.models.shared.FacetSortEnum facetSort) {
        this.facetSort = facetSort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facets")
    public String facets;
    public GetSearchMotorcycleActiveQueryParams withFacets(String facets) {
        this.facets = facets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_days")
    public String firstSeenDays;
    public GetSearchMotorcycleActiveQueryParams withFirstSeenDays(String firstSeenDays) {
        this.firstSeenDays = firstSeenDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_range")
    public String firstSeenRange;
    public GetSearchMotorcycleActiveQueryParams withFirstSeenRange(String firstSeenRange) {
        this.firstSeenRange = firstSeenRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fuel_type")
    public String fuelType;
    public GetSearchMotorcycleActiveQueryParams withFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inventory_type")
    public openapisdk.models.shared.InventoryTypeEnum inventoryType;
    public GetSearchMotorcycleActiveQueryParams withInventoryType(openapisdk.models.shared.InventoryTypeEnum inventoryType) {
        this.inventoryType = inventoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_seen_days")
    public String lastSeenDays;
    public GetSearchMotorcycleActiveQueryParams withLastSeenDays(String lastSeenDays) {
        this.lastSeenDays = lastSeenDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_seen_range")
    public String lastSeenRange;
    public GetSearchMotorcycleActiveQueryParams withLastSeenRange(String lastSeenRange) {
        this.lastSeenRange = lastSeenRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latitude")
    public Double latitude;
    public GetSearchMotorcycleActiveQueryParams withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longitude")
    public Double longitude;
    public GetSearchMotorcycleActiveQueryParams withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=make")
    public String make;
    public GetSearchMotorcycleActiveQueryParams withMake(String make) {
        this.make = make;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=miles_range")
    public String milesRange;
    public GetSearchMotorcycleActiveQueryParams withMilesRange(String milesRange) {
        this.milesRange = milesRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public GetSearchMotorcycleActiveQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=msa_code")
    public String msaCode;
    public GetSearchMotorcycleActiveQueryParams withMsaCode(String msaCode) {
        this.msaCode = msaCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=msrp_range")
    public String msrpRange;
    public GetSearchMotorcycleActiveQueryParams withMsrpRange(String msrpRange) {
        this.msrpRange = msrpRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=price_range")
    public String priceRange;
    public GetSearchMotorcycleActiveQueryParams withPriceRange(String priceRange) {
        this.priceRange = priceRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Integer radius;
    public GetSearchMotorcycleActiveQueryParams withRadius(Integer radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=range_facets")
    public String rangeFacets;
    public GetSearchMotorcycleActiveQueryParams withRangeFacets(String rangeFacets) {
        this.rangeFacets = rangeFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Integer rows;
    public GetSearchMotorcycleActiveQueryParams withRows(Integer rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_text")
    public String searchText;
    public GetSearchMotorcycleActiveQueryParams withSearchText(String searchText) {
        this.searchText = searchText;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public String sortBy;
    public GetSearchMotorcycleActiveQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.SortOrderEnum sortOrder;
    public GetSearchMotorcycleActiveQueryParams withSortOrder(openapisdk.models.shared.SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public String source;
    public GetSearchMotorcycleActiveQueryParams withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public GetSearchMotorcycleActiveQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetSearchMotorcycleActiveQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stats")
    public String stats;
    public GetSearchMotorcycleActiveQueryParams withStats(String stats) {
        this.stats = stats;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stock_no")
    public String stockNo;
    public GetSearchMotorcycleActiveQueryParams withStockNo(String stockNo) {
        this.stockNo = stockNo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxonomy_vin")
    public String taxonomyVin;
    public GetSearchMotorcycleActiveQueryParams withTaxonomyVin(String taxonomyVin) {
        this.taxonomyVin = taxonomyVin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transmission")
    public String transmission;
    public GetSearchMotorcycleActiveQueryParams withTransmission(String transmission) {
        this.transmission = transmission;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trim")
    public String trim;
    public GetSearchMotorcycleActiveQueryParams withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicle_type")
    public String vehicleType;
    public GetSearchMotorcycleActiveQueryParams withVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vin")
    public String vin;
    public GetSearchMotorcycleActiveQueryParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public String year;
    public GetSearchMotorcycleActiveQueryParams withYear(String year) {
        this.year = year;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public String zip;
    public GetSearchMotorcycleActiveQueryParams withZip(String zip) {
        this.zip = zip;
        return this;
    }
}