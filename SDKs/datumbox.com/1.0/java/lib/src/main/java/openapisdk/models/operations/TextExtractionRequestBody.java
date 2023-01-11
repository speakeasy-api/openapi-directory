package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TextExtractionRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public TextExtractionRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public TextExtractionRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}