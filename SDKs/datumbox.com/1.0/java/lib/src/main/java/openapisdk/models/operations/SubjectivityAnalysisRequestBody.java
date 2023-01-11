package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubjectivityAnalysisRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public SubjectivityAnalysisRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public SubjectivityAnalysisRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}