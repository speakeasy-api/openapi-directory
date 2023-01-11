package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentAnalysisRequest {
    public GetDocumentAnalysisHeaders headers;
    public GetDocumentAnalysisRequest withHeaders(GetDocumentAnalysisHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDocumentAnalysisRequest request;
    public GetDocumentAnalysisRequest withRequest(openapisdk.models.shared.GetDocumentAnalysisRequest request) {
        this.request = request;
        return this;
    }
}