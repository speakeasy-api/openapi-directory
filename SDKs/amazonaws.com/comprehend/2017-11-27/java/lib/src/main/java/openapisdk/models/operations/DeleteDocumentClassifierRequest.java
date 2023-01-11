package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDocumentClassifierRequest {
    public DeleteDocumentClassifierHeaders headers;
    public DeleteDocumentClassifierRequest withHeaders(DeleteDocumentClassifierHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDocumentClassifierRequest request;
    public DeleteDocumentClassifierRequest withRequest(openapisdk.models.shared.DeleteDocumentClassifierRequest request) {
        this.request = request;
        return this;
    }
}