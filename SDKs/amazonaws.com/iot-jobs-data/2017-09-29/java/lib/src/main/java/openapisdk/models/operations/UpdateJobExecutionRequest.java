package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJobExecutionRequest {
    public UpdateJobExecutionPathParams pathParams;
    public UpdateJobExecutionRequest withPathParams(UpdateJobExecutionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateJobExecutionHeaders headers;
    public UpdateJobExecutionRequest withHeaders(UpdateJobExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateJobExecutionRequestBody request;
    public UpdateJobExecutionRequest withRequest(UpdateJobExecutionRequestBody request) {
        this.request = request;
        return this;
    }
}