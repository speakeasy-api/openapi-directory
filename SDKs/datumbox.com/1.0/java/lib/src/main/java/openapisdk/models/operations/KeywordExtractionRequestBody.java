package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeywordExtractionRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public KeywordExtractionRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=n")
    public Long n;
    public KeywordExtractionRequestBody withN(Long n) {
        this.n = n;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public KeywordExtractionRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}