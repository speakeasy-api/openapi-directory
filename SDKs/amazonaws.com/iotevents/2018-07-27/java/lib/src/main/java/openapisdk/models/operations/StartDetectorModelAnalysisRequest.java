package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDetectorModelAnalysisRequest {
    public StartDetectorModelAnalysisHeaders headers;
    public StartDetectorModelAnalysisRequest withHeaders(StartDetectorModelAnalysisHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartDetectorModelAnalysisRequestBody request;
    public StartDetectorModelAnalysisRequest withRequest(StartDetectorModelAnalysisRequestBody request) {
        this.request = request;
        return this;
    }
}