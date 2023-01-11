package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassifyDocumentRequest {
    public ClassifyDocumentHeaders headers;
    public ClassifyDocumentRequest withHeaders(ClassifyDocumentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClassifyDocumentRequest request;
    public ClassifyDocumentRequest withRequest(openapisdk.models.shared.ClassifyDocumentRequest request) {
        this.request = request;
        return this;
    }
}