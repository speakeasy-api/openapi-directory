package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TwitterSentimentAnalysisRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public TwitterSentimentAnalysisRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public TwitterSentimentAnalysisRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}