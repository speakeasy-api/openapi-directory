package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSalesCountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSalesCountQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=car_type")
    public openapisdk.models.shared.ApiKeyEnum carType;
    public GetSalesCountQueryParams withCarType(openapisdk.models.shared.ApiKeyEnum carType) {
        this.carType = carType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city_state")
    public String cityState;
    public GetSalesCountQueryParams withCityState(String cityState) {
        this.cityState = cityState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public openapisdk.models.shared.ApiKeyEnum1 country;
    public GetSalesCountQueryParams withCountry(openapisdk.models.shared.ApiKeyEnum1 country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=make")
    public String make;
    public GetSalesCountQueryParams withMake(String make) {
        this.make = make;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mm")
    public String mm;
    public GetSalesCountQueryParams withMm(String mm) {
        this.mm = mm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetSalesCountQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxonomy_vin")
    public String taxonomyVin;
    public GetSalesCountQueryParams withTaxonomyVin(String taxonomyVin) {
        this.taxonomyVin = taxonomyVin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vin")
    public String vin;
    public GetSalesCountQueryParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ymm")
    public String ymm;
    public GetSalesCountQueryParams withYmm(String ymm) {
        this.ymm = ymm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ymmt")
    public String ymmt;
    public GetSalesCountQueryParams withYmmt(String ymmt) {
        this.ymmt = ymmt;
        return this;
    }
}