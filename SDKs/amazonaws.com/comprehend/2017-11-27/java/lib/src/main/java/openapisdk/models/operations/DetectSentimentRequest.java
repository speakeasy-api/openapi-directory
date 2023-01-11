package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectSentimentRequest {
    public DetectSentimentHeaders headers;
    public DetectSentimentRequest withHeaders(DetectSentimentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectSentimentRequest request;
    public DetectSentimentRequest withRequest(openapisdk.models.shared.DetectSentimentRequest request) {
        this.request = request;
        return this;
    }
}