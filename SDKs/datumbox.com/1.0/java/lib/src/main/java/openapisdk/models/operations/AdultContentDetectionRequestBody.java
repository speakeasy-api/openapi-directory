package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdultContentDetectionRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public AdultContentDetectionRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public AdultContentDetectionRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}