package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SentimentAnalysisRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public SentimentAnalysisRequestBody request;
    public SentimentAnalysisRequest withRequest(SentimentAnalysisRequestBody request) {
        this.request = request;
        return this;
    }
}