package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDetectionRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public LanguageDetectionRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public LanguageDetectionRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}