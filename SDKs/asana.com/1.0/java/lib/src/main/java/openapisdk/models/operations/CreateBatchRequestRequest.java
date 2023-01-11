package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBatchRequestRequest {
    public CreateBatchRequestQueryParams queryParams;
    public CreateBatchRequestRequest withQueryParams(CreateBatchRequestQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBatchRequestRequestBody request;
    public CreateBatchRequestRequest withRequest(CreateBatchRequestRequestBody request) {
        this.request = request;
        return this;
    }
}