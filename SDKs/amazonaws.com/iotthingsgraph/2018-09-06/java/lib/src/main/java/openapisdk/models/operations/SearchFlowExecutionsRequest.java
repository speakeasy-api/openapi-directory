package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchFlowExecutionsRequest {
    public SearchFlowExecutionsQueryParams queryParams;
    public SearchFlowExecutionsRequest withQueryParams(SearchFlowExecutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchFlowExecutionsHeaders headers;
    public SearchFlowExecutionsRequest withHeaders(SearchFlowExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchFlowExecutionsRequest request;
    public SearchFlowExecutionsRequest withRequest(openapisdk.models.shared.SearchFlowExecutionsRequest request) {
        this.request = request;
        return this;
    }
}