package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDailyStatsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetDailyStatsQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=car_type")
    public openapisdk.models.shared.ApiKeyEnum carType;
    public GetDailyStatsQueryParams withCarType(openapisdk.models.shared.ApiKeyEnum carType) {
        this.carType = carType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city_state")
    public String cityState;
    public GetDailyStatsQueryParams withCityState(String cityState) {
        this.cityState = cityState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public openapisdk.models.shared.ApiKeyEnum8 country;
    public GetDailyStatsQueryParams withCountry(openapisdk.models.shared.ApiKeyEnum8 country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetDailyStatsQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxonomy_vin")
    public String taxonomyVin;
    public GetDailyStatsQueryParams withTaxonomyVin(String taxonomyVin) {
        this.taxonomyVin = taxonomyVin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vin")
    public String vin;
    public GetDailyStatsQueryParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ymm")
    public String ymm;
    public GetDailyStatsQueryParams withYmm(String ymm) {
        this.ymm = ymm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ymmt")
    public String ymmt;
    public GetDailyStatsQueryParams withYmmt(String ymmt) {
        this.ymmt = ymmt;
        return this;
    }
}