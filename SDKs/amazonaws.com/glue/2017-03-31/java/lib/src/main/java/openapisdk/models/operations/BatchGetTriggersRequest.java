package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetTriggersRequest {
    public BatchGetTriggersHeaders headers;
    public BatchGetTriggersRequest withHeaders(BatchGetTriggersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetTriggersRequest request;
    public BatchGetTriggersRequest withRequest(openapisdk.models.shared.BatchGetTriggersRequest request) {
        this.request = request;
        return this;
    }
}