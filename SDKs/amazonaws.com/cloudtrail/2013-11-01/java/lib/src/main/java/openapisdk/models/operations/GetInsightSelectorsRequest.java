package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInsightSelectorsRequest {
    public GetInsightSelectorsHeaders headers;
    public GetInsightSelectorsRequest withHeaders(GetInsightSelectorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInsightSelectorsRequest request;
    public GetInsightSelectorsRequest withRequest(openapisdk.models.shared.GetInsightSelectorsRequest request) {
        this.request = request;
        return this;
    }
}