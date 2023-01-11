package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderDetectionRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public GenderDetectionRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public GenderDetectionRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}