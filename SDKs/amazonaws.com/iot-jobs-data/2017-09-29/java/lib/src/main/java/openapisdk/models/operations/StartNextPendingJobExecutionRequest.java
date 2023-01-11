package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartNextPendingJobExecutionRequest {
    public StartNextPendingJobExecutionPathParams pathParams;
    public StartNextPendingJobExecutionRequest withPathParams(StartNextPendingJobExecutionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StartNextPendingJobExecutionHeaders headers;
    public StartNextPendingJobExecutionRequest withHeaders(StartNextPendingJobExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartNextPendingJobExecutionRequestBody request;
    public StartNextPendingJobExecutionRequest withRequest(StartNextPendingJobExecutionRequestBody request) {
        this.request = request;
        return this;
    }
}