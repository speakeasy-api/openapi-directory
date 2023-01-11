package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetTracesRequest {
    public BatchGetTracesQueryParams queryParams;
    public BatchGetTracesRequest withQueryParams(BatchGetTracesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BatchGetTracesHeaders headers;
    public BatchGetTracesRequest withHeaders(BatchGetTracesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchGetTracesRequestBody request;
    public BatchGetTracesRequest withRequest(BatchGetTracesRequestBody request) {
        this.request = request;
        return this;
    }
}