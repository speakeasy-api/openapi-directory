package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDocumentClassifierRequest {
    public CreateDocumentClassifierHeaders headers;
    public CreateDocumentClassifierRequest withHeaders(CreateDocumentClassifierHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDocumentClassifierRequest request;
    public CreateDocumentClassifierRequest withRequest(openapisdk.models.shared.CreateDocumentClassifierRequest request) {
        this.request = request;
        return this;
    }
}