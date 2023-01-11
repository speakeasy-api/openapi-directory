package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReadabilityAssessmentRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public ReadabilityAssessmentRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public ReadabilityAssessmentRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}