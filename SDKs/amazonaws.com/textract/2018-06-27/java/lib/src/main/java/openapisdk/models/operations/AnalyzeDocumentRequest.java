package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyzeDocumentRequest {
    public AnalyzeDocumentHeaders headers;
    public AnalyzeDocumentRequest withHeaders(AnalyzeDocumentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnalyzeDocumentRequest request;
    public AnalyzeDocumentRequest withRequest(openapisdk.models.shared.AnalyzeDocumentRequest request) {
        this.request = request;
        return this;
    }
}