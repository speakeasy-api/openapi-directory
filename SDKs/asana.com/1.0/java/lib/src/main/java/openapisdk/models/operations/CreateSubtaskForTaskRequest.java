package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubtaskForTaskRequest {
    public CreateSubtaskForTaskPathParams pathParams;
    public CreateSubtaskForTaskRequest withPathParams(CreateSubtaskForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateSubtaskForTaskQueryParams queryParams;
    public CreateSubtaskForTaskRequest withQueryParams(CreateSubtaskForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSubtaskForTaskRequestBodyInput request;
    public CreateSubtaskForTaskRequest withRequest(CreateSubtaskForTaskRequestBodyInput request) {
        this.request = request;
        return this;
    }
}