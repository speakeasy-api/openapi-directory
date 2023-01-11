package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeparturesByCrsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiKey")
    public String apiKey;
    public GetDeparturesByCrsQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filterStation")
    public String filterStation;
    public GetDeparturesByCrsQueryParams withFilterStation(String filterStation) {
        this.filterStation = filterStation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=numServices")
    public Long numServices;
    public GetDeparturesByCrsQueryParams withNumServices(Long numServices) {
        this.numServices = numServices;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceDetails")
    public Boolean serviceDetails;
    public GetDeparturesByCrsQueryParams withServiceDetails(Boolean serviceDetails) {
        this.serviceDetails = serviceDetails;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeOffset")
    public Long timeOffset;
    public GetDeparturesByCrsQueryParams withTimeOffset(Long timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeWindow")
    public Long timeWindow;
    public GetDeparturesByCrsQueryParams withTimeWindow(Long timeWindow) {
        this.timeWindow = timeWindow;
        return this;
    }
}