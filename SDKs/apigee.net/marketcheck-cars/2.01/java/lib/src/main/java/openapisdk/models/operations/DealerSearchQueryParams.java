package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DealerSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public DealerSearchQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public DealerSearchQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public openapisdk.models.shared.NonDefaultCountryEnum country;
    public DealerSearchQueryParams withCountry(openapisdk.models.shared.NonDefaultCountryEnum country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealer_type")
    public openapisdk.models.shared.DealerTypeEnum dealerType;
    public DealerSearchQueryParams withDealerType(openapisdk.models.shared.DealerTypeEnum dealerType) {
        this.dealerType = dealerType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facets")
    public String facets;
    public DealerSearchQueryParams withFacets(String facets) {
        this.facets = facets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inventory_url")
    public String inventoryUrl;
    public DealerSearchQueryParams withInventoryUrl(String inventoryUrl) {
        this.inventoryUrl = inventoryUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latitude")
    public Double latitude;
    public DealerSearchQueryParams withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=listing_count_range")
    public String listingCountRange;
    public DealerSearchQueryParams withListingCountRange(String listingCountRange) {
        this.listingCountRange = listingCountRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longitude")
    public Double longitude;
    public DealerSearchQueryParams withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provider")
    public Boolean provider;
    public DealerSearchQueryParams withProvider(Boolean provider) {
        this.provider = provider;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Integer radius;
    public DealerSearchQueryParams withRadius(Integer radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=range_facets")
    public String rangeFacets;
    public DealerSearchQueryParams withRangeFacets(String rangeFacets) {
        this.rangeFacets = rangeFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Integer rows;
    public DealerSearchQueryParams withRows(Integer rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public String sortBy;
    public DealerSearchQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.SortOrderEnum sortOrder;
    public DealerSearchQueryParams withSortOrder(openapisdk.models.shared.SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public DealerSearchQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public DealerSearchQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public String zip;
    public DealerSearchQueryParams withZip(String zip) {
        this.zip = zip;
        return this;
    }
}