package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBatchRequestBody request;
    public CreateBatchRequest withRequest(CreateBatchRequestBody request) {
        this.request = request;
        return this;
    }
}