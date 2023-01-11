package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFastestDeparturesByCrsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiKey")
    public String apiKey;
    public GetFastestDeparturesByCrsQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filterList")
    public String filterList;
    public GetFastestDeparturesByCrsQueryParams withFilterList(String filterList) {
        this.filterList = filterList;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceDetails")
    public Boolean serviceDetails;
    public GetFastestDeparturesByCrsQueryParams withServiceDetails(Boolean serviceDetails) {
        this.serviceDetails = serviceDetails;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeOffset")
    public Long timeOffset;
    public GetFastestDeparturesByCrsQueryParams withTimeOffset(Long timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeWindow")
    public Long timeWindow;
    public GetFastestDeparturesByCrsQueryParams withTimeWindow(Long timeWindow) {
        this.timeWindow = timeWindow;
        return this;
    }
}