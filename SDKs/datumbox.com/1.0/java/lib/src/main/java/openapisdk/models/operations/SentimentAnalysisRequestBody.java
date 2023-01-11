package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SentimentAnalysisRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public SentimentAnalysisRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public SentimentAnalysisRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}