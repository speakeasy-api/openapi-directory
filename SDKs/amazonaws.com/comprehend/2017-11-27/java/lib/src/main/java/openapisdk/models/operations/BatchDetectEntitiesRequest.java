package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDetectEntitiesRequest {
    public BatchDetectEntitiesHeaders headers;
    public BatchDetectEntitiesRequest withHeaders(BatchDetectEntitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDetectEntitiesRequest request;
    public BatchDetectEntitiesRequest withRequest(openapisdk.models.shared.BatchDetectEntitiesRequest request) {
        this.request = request;
        return this;
    }
}