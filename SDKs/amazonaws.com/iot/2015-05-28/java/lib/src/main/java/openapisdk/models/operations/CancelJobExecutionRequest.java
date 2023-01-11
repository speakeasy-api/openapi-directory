package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelJobExecutionRequest {
    public CancelJobExecutionPathParams pathParams;
    public CancelJobExecutionRequest withPathParams(CancelJobExecutionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CancelJobExecutionQueryParams queryParams;
    public CancelJobExecutionRequest withQueryParams(CancelJobExecutionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CancelJobExecutionHeaders headers;
    public CancelJobExecutionRequest withHeaders(CancelJobExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CancelJobExecutionRequestBody request;
    public CancelJobExecutionRequest withRequest(CancelJobExecutionRequestBody request) {
        this.request = request;
        return this;
    }
}