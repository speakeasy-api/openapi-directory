package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStoryForTaskRequest {
    public CreateStoryForTaskPathParams pathParams;
    public CreateStoryForTaskRequest withPathParams(CreateStoryForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateStoryForTaskQueryParams queryParams;
    public CreateStoryForTaskRequest withQueryParams(CreateStoryForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateStoryForTaskRequestBodyInput request;
    public CreateStoryForTaskRequest withRequest(CreateStoryForTaskRequestBodyInput request) {
        this.request = request;
        return this;
    }
}