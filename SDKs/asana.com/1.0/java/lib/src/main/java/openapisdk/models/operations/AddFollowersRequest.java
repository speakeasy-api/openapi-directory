package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFollowersRequest {
    public AddFollowersPathParams pathParams;
    public AddFollowersRequest withPathParams(AddFollowersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddFollowersQueryParams queryParams;
    public AddFollowersRequest withQueryParams(AddFollowersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddFollowersRequestBody request;
    public AddFollowersRequest withRequest(AddFollowersRequestBody request) {
        this.request = request;
        return this;
    }
}