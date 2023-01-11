package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EducationalDetectionRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public EducationalDetectionRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public EducationalDetectionRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}