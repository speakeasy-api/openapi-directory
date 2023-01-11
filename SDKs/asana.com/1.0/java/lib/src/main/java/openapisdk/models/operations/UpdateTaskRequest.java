package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskRequest {
    public UpdateTaskPathParams pathParams;
    public UpdateTaskRequest withPathParams(UpdateTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateTaskQueryParams queryParams;
    public UpdateTaskRequest withQueryParams(UpdateTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateTaskRequestBodyInput request;
    public UpdateTaskRequest withRequest(UpdateTaskRequestBodyInput request) {
        this.request = request;
        return this;
    }
}