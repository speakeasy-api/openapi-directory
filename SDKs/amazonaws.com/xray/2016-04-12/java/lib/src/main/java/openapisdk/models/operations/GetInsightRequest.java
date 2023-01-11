package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInsightRequest {
    public GetInsightHeaders headers;
    public GetInsightRequest withHeaders(GetInsightHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetInsightRequestBody request;
    public GetInsightRequest withRequest(GetInsightRequestBody request) {
        this.request = request;
        return this;
    }
}