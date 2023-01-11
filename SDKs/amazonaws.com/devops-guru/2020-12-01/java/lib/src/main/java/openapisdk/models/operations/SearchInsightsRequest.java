package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchInsightsRequest {
    public SearchInsightsQueryParams queryParams;
    public SearchInsightsRequest withQueryParams(SearchInsightsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchInsightsHeaders headers;
    public SearchInsightsRequest withHeaders(SearchInsightsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SearchInsightsRequestBody request;
    public SearchInsightsRequest withRequest(SearchInsightsRequestBody request) {
        this.request = request;
        return this;
    }
}