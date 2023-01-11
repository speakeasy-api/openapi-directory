package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutInsightSelectorsRequest {
    public PutInsightSelectorsHeaders headers;
    public PutInsightSelectorsRequest withHeaders(PutInsightSelectorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutInsightSelectorsRequest request;
    public PutInsightSelectorsRequest withRequest(openapisdk.models.shared.PutInsightSelectorsRequest request) {
        this.request = request;
        return this;
    }
}