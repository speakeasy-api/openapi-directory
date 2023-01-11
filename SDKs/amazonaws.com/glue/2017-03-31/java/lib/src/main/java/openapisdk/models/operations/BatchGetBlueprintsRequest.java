package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetBlueprintsRequest {
    public BatchGetBlueprintsHeaders headers;
    public BatchGetBlueprintsRequest withHeaders(BatchGetBlueprintsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetBlueprintsRequest request;
    public BatchGetBlueprintsRequest withRequest(openapisdk.models.shared.BatchGetBlueprintsRequest request) {
        this.request = request;
        return this;
    }
}