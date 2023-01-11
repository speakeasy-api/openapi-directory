package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDocumentTextDetectionRequest {
    public StartDocumentTextDetectionHeaders headers;
    public StartDocumentTextDetectionRequest withHeaders(StartDocumentTextDetectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartDocumentTextDetectionRequest request;
    public StartDocumentTextDetectionRequest withRequest(openapisdk.models.shared.StartDocumentTextDetectionRequest request) {
        this.request = request;
        return this;
    }
}