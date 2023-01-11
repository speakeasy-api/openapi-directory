package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommercialDetectionRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public CommercialDetectionRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public CommercialDetectionRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}