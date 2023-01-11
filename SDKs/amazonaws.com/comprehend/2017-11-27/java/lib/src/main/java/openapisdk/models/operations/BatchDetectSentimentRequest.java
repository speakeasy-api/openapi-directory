package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDetectSentimentRequest {
    public BatchDetectSentimentHeaders headers;
    public BatchDetectSentimentRequest withHeaders(BatchDetectSentimentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDetectSentimentRequest request;
    public BatchDetectSentimentRequest withRequest(openapisdk.models.shared.BatchDetectSentimentRequest request) {
        this.request = request;
        return this;
    }
}