package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagForTaskRequest {
    public AddTagForTaskPathParams pathParams;
    public AddTagForTaskRequest withPathParams(AddTagForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddTagForTaskQueryParams queryParams;
    public AddTagForTaskRequest withQueryParams(AddTagForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddTagForTaskRequestBody request;
    public AddTagForTaskRequest withRequest(AddTagForTaskRequestBody request) {
        this.request = request;
        return this;
    }
}