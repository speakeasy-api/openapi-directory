package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArrivalsAndDeparturesByCrsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiKey")
    public String apiKey;
    public GetArrivalsAndDeparturesByCrsQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filterStation")
    public String filterStation;
    public GetArrivalsAndDeparturesByCrsQueryParams withFilterStation(String filterStation) {
        this.filterStation = filterStation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filterType")
    public String filterType;
    public GetArrivalsAndDeparturesByCrsQueryParams withFilterType(String filterType) {
        this.filterType = filterType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=numServices")
    public Long numServices;
    public GetArrivalsAndDeparturesByCrsQueryParams withNumServices(Long numServices) {
        this.numServices = numServices;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceDetails")
    public Boolean serviceDetails;
    public GetArrivalsAndDeparturesByCrsQueryParams withServiceDetails(Boolean serviceDetails) {
        this.serviceDetails = serviceDetails;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeOffset")
    public Long timeOffset;
    public GetArrivalsAndDeparturesByCrsQueryParams withTimeOffset(Long timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeWindow")
    public Long timeWindow;
    public GetArrivalsAndDeparturesByCrsQueryParams withTimeWindow(Long timeWindow) {
        this.timeWindow = timeWindow;
        return this;
    }
}