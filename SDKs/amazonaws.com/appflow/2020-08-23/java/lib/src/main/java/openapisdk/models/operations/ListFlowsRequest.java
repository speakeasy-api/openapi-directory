package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFlowsRequest {
    public ListFlowsQueryParams queryParams;
    public ListFlowsRequest withQueryParams(ListFlowsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFlowsHeaders headers;
    public ListFlowsRequest withHeaders(ListFlowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListFlowsRequestBody request;
    public ListFlowsRequest withRequest(ListFlowsRequestBody request) {
        this.request = request;
        return this;
    }
}