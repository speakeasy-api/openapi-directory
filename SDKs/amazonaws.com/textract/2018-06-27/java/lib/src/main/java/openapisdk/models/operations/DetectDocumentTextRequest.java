package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectDocumentTextRequest {
    public DetectDocumentTextHeaders headers;
    public DetectDocumentTextRequest withHeaders(DetectDocumentTextHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectDocumentTextRequest request;
    public DetectDocumentTextRequest withRequest(openapisdk.models.shared.DetectDocumentTextRequest request) {
        this.request = request;
        return this;
    }
}