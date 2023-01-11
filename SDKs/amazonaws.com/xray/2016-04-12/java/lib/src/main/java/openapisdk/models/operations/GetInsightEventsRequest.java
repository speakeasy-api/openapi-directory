package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInsightEventsRequest {
    public GetInsightEventsQueryParams queryParams;
    public GetInsightEventsRequest withQueryParams(GetInsightEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetInsightEventsHeaders headers;
    public GetInsightEventsRequest withHeaders(GetInsightEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetInsightEventsRequestBody request;
    public GetInsightEventsRequest withRequest(GetInsightEventsRequestBody request) {
        this.request = request;
        return this;
    }
}