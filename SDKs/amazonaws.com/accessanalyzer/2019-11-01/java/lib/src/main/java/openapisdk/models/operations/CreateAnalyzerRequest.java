package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAnalyzerRequest {
    public CreateAnalyzerHeaders headers;
    public CreateAnalyzerRequest withHeaders(CreateAnalyzerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAnalyzerRequestBody request;
    public CreateAnalyzerRequest withRequest(CreateAnalyzerRequestBody request) {
        this.request = request;
        return this;
    }
}