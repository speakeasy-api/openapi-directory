package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchFlowTemplatesRequest {
    public SearchFlowTemplatesQueryParams queryParams;
    public SearchFlowTemplatesRequest withQueryParams(SearchFlowTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchFlowTemplatesHeaders headers;
    public SearchFlowTemplatesRequest withHeaders(SearchFlowTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchFlowTemplatesRequest request;
    public SearchFlowTemplatesRequest withRequest(openapisdk.models.shared.SearchFlowTemplatesRequest request) {
        this.request = request;
        return this;
    }
}