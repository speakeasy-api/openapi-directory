package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveTagForTaskRequest {
    public RemoveTagForTaskPathParams pathParams;
    public RemoveTagForTaskRequest withPathParams(RemoveTagForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveTagForTaskQueryParams queryParams;
    public RemoveTagForTaskRequest withQueryParams(RemoveTagForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveTagForTaskRequestBody request;
    public RemoveTagForTaskRequest withRequest(RemoveTagForTaskRequestBody request) {
        this.request = request;
        return this;
    }
}