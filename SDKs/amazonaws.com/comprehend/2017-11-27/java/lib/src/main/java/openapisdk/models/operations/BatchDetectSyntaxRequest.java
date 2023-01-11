package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDetectSyntaxRequest {
    public BatchDetectSyntaxHeaders headers;
    public BatchDetectSyntaxRequest withHeaders(BatchDetectSyntaxHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDetectSyntaxRequest request;
    public BatchDetectSyntaxRequest withRequest(openapisdk.models.shared.BatchDetectSyntaxRequest request) {
        this.request = request;
        return this;
    }
}