package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TwitterSentimentAnalysisRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public TwitterSentimentAnalysisRequestBody request;
    public TwitterSentimentAnalysisRequest withRequest(TwitterSentimentAnalysisRequestBody request) {
        this.request = request;
        return this;
    }
}