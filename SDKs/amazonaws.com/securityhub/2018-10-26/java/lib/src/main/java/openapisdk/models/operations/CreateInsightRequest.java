package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInsightRequest {
    public CreateInsightHeaders headers;
    public CreateInsightRequest withHeaders(CreateInsightHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateInsightRequestBody request;
    public CreateInsightRequest withRequest(CreateInsightRequestBody request) {
        this.request = request;
        return this;
    }
}