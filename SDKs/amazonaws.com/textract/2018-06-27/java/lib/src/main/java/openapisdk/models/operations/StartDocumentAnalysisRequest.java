package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDocumentAnalysisRequest {
    public StartDocumentAnalysisHeaders headers;
    public StartDocumentAnalysisRequest withHeaders(StartDocumentAnalysisHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartDocumentAnalysisRequest request;
    public StartDocumentAnalysisRequest withRequest(openapisdk.models.shared.StartDocumentAnalysisRequest request) {
        this.request = request;
        return this;
    }
}