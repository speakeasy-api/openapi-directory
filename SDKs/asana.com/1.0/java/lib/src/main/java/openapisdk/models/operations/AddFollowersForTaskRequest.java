package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFollowersForTaskRequest {
    public AddFollowersForTaskPathParams pathParams;
    public AddFollowersForTaskRequest withPathParams(AddFollowersForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddFollowersForTaskQueryParams queryParams;
    public AddFollowersForTaskRequest withQueryParams(AddFollowersForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddFollowersForTaskRequestBody request;
    public AddFollowersForTaskRequest withRequest(AddFollowersForTaskRequestBody request) {
        this.request = request;
        return this;
    }
}