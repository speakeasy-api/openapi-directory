package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSimulationApplicationsRequest {
    public ListSimulationApplicationsQueryParams queryParams;
    public ListSimulationApplicationsRequest withQueryParams(ListSimulationApplicationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSimulationApplicationsHeaders headers;
    public ListSimulationApplicationsRequest withHeaders(ListSimulationApplicationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListSimulationApplicationsRequestBody request;
    public ListSimulationApplicationsRequest withRequest(ListSimulationApplicationsRequestBody request) {
        this.request = request;
        return this;
    }
}