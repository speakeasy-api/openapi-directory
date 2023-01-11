package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubjectivityAnalysisRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public SubjectivityAnalysisRequestBody request;
    public SubjectivityAnalysisRequest withRequest(SubjectivityAnalysisRequestBody request) {
        this.request = request;
        return this;
    }
}