package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetResourceConfigRequest {
    public BatchGetResourceConfigHeaders headers;
    public BatchGetResourceConfigRequest withHeaders(BatchGetResourceConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetResourceConfigRequest request;
    public BatchGetResourceConfigRequest withRequest(openapisdk.models.shared.BatchGetResourceConfigRequest request) {
        this.request = request;
        return this;
    }
}