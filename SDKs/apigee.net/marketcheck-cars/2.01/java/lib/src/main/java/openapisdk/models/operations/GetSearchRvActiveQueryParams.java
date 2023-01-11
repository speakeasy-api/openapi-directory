package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchRvActiveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSearchRvActiveQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public GetSearchRvActiveQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=class")
    public String class_;
    public GetSearchRvActiveQueryParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealer_id")
    public String dealerId;
    public GetSearchRvActiveQueryParams withDealerId(String dealerId) {
        this.dealerId = dealerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealer_name")
    public String dealerName;
    public GetSearchRvActiveQueryParams withDealerName(String dealerName) {
        this.dealerName = dealerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine")
    public String engine;
    public GetSearchRvActiveQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exterior_color")
    public String exteriorColor;
    public GetSearchRvActiveQueryParams withExteriorColor(String exteriorColor) {
        this.exteriorColor = exteriorColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_sort")
    public openapisdk.models.shared.FacetSortEnum facetSort;
    public GetSearchRvActiveQueryParams withFacetSort(openapisdk.models.shared.FacetSortEnum facetSort) {
        this.facetSort = facetSort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facets")
    public String facets;
    public GetSearchRvActiveQueryParams withFacets(String facets) {
        this.facets = facets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_days")
    public String firstSeenDays;
    public GetSearchRvActiveQueryParams withFirstSeenDays(String firstSeenDays) {
        this.firstSeenDays = firstSeenDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_range")
    public String firstSeenRange;
    public GetSearchRvActiveQueryParams withFirstSeenRange(String firstSeenRange) {
        this.firstSeenRange = firstSeenRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fuel_type")
    public String fuelType;
    public GetSearchRvActiveQueryParams withFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interior_color")
    public String interiorColor;
    public GetSearchRvActiveQueryParams withInteriorColor(String interiorColor) {
        this.interiorColor = interiorColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inventory_type")
    public openapisdk.models.shared.InventoryTypeEnum inventoryType;
    public GetSearchRvActiveQueryParams withInventoryType(openapisdk.models.shared.InventoryTypeEnum inventoryType) {
        this.inventoryType = inventoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_seen_days")
    public String lastSeenDays;
    public GetSearchRvActiveQueryParams withLastSeenDays(String lastSeenDays) {
        this.lastSeenDays = lastSeenDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_seen_range")
    public String lastSeenRange;
    public GetSearchRvActiveQueryParams withLastSeenRange(String lastSeenRange) {
        this.lastSeenRange = lastSeenRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latitude")
    public Double latitude;
    public GetSearchRvActiveQueryParams withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longitude")
    public Double longitude;
    public GetSearchRvActiveQueryParams withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=make")
    public String make;
    public GetSearchRvActiveQueryParams withMake(String make) {
        this.make = make;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=miles_range")
    public String milesRange;
    public GetSearchRvActiveQueryParams withMilesRange(String milesRange) {
        this.milesRange = milesRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public GetSearchRvActiveQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model_o")
    public String modelO;
    public GetSearchRvActiveQueryParams withModelO(String modelO) {
        this.modelO = modelO;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=msa_code")
    public String msaCode;
    public GetSearchRvActiveQueryParams withMsaCode(String msaCode) {
        this.msaCode = msaCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=msrp_range")
    public String msrpRange;
    public GetSearchRvActiveQueryParams withMsrpRange(String msrpRange) {
        this.msrpRange = msrpRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=price_range")
    public String priceRange;
    public GetSearchRvActiveQueryParams withPriceRange(String priceRange) {
        this.priceRange = priceRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Integer radius;
    public GetSearchRvActiveQueryParams withRadius(Integer radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=range_facets")
    public String rangeFacets;
    public GetSearchRvActiveQueryParams withRangeFacets(String rangeFacets) {
        this.rangeFacets = rangeFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Integer rows;
    public GetSearchRvActiveQueryParams withRows(Integer rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_text")
    public String searchText;
    public GetSearchRvActiveQueryParams withSearchText(String searchText) {
        this.searchText = searchText;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public String sortBy;
    public GetSearchRvActiveQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.SortOrderEnum sortOrder;
    public GetSearchRvActiveQueryParams withSortOrder(openapisdk.models.shared.SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public String source;
    public GetSearchRvActiveQueryParams withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public GetSearchRvActiveQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetSearchRvActiveQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stats")
    public String stats;
    public GetSearchRvActiveQueryParams withStats(String stats) {
        this.stats = stats;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stock_no")
    public String stockNo;
    public GetSearchRvActiveQueryParams withStockNo(String stockNo) {
        this.stockNo = stockNo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transmission")
    public String transmission;
    public GetSearchRvActiveQueryParams withTransmission(String transmission) {
        this.transmission = transmission;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vin")
    public String vin;
    public GetSearchRvActiveQueryParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public String year;
    public GetSearchRvActiveQueryParams withYear(String year) {
        this.year = year;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public String zip;
    public GetSearchRvActiveQueryParams withZip(String zip) {
        this.zip = zip;
        return this;
    }
}