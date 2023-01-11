package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPopularCarsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetPopularCarsQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=car_type")
    public openapisdk.models.shared.ApiKeyEnum carType;
    public GetPopularCarsQueryParams withCarType(openapisdk.models.shared.ApiKeyEnum carType) {
        this.carType = carType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city_state")
    public String cityState;
    public GetPopularCarsQueryParams withCityState(String cityState) {
        this.cityState = cityState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public openapisdk.models.shared.ApiKeyEnum1 country;
    public GetPopularCarsQueryParams withCountry(openapisdk.models.shared.ApiKeyEnum1 country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetPopularCarsQueryParams withState(String state) {
        this.state = state;
        return this;
    }
}