package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNextDeparturesByCrsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiKey")
    public String apiKey;
    public GetNextDeparturesByCrsQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filterList")
    public String filterList;
    public GetNextDeparturesByCrsQueryParams withFilterList(String filterList) {
        this.filterList = filterList;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceDetails")
    public Boolean serviceDetails;
    public GetNextDeparturesByCrsQueryParams withServiceDetails(Boolean serviceDetails) {
        this.serviceDetails = serviceDetails;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeOffset")
    public Long timeOffset;
    public GetNextDeparturesByCrsQueryParams withTimeOffset(Long timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeWindow")
    public Long timeWindow;
    public GetNextDeparturesByCrsQueryParams withTimeWindow(Long timeWindow) {
        this.timeWindow = timeWindow;
        return this;
    }
}