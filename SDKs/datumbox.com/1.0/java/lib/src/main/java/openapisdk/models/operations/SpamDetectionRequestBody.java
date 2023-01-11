package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpamDetectionRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public SpamDetectionRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public SpamDetectionRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}