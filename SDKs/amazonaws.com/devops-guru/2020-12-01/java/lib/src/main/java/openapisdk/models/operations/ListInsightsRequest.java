package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInsightsRequest {
    public ListInsightsQueryParams queryParams;
    public ListInsightsRequest withQueryParams(ListInsightsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInsightsHeaders headers;
    public ListInsightsRequest withHeaders(ListInsightsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListInsightsRequestBody request;
    public ListInsightsRequest withRequest(ListInsightsRequestBody request) {
        this.request = request;
        return this;
    }
}