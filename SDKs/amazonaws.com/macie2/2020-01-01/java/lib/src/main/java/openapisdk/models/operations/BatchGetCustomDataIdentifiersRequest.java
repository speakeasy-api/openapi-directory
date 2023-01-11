package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetCustomDataIdentifiersRequest {
    public BatchGetCustomDataIdentifiersHeaders headers;
    public BatchGetCustomDataIdentifiersRequest withHeaders(BatchGetCustomDataIdentifiersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchGetCustomDataIdentifiersRequestBody request;
    public BatchGetCustomDataIdentifiersRequest withRequest(BatchGetCustomDataIdentifiersRequestBody request) {
        this.request = request;
        return this;
    }
}