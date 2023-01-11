package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReadabilityAssessmentRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ReadabilityAssessmentRequestBody request;
    public ReadabilityAssessmentRequest withRequest(ReadabilityAssessmentRequestBody request) {
        this.request = request;
        return this;
    }
}