package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentTextDetectionRequest {
    public GetDocumentTextDetectionHeaders headers;
    public GetDocumentTextDetectionRequest withHeaders(GetDocumentTextDetectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDocumentTextDetectionRequest request;
    public GetDocumentTextDetectionRequest withRequest(openapisdk.models.shared.GetDocumentTextDetectionRequest request) {
        this.request = request;
        return this;
    }
}