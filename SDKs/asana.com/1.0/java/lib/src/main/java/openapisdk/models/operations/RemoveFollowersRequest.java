package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveFollowersRequest {
    public RemoveFollowersPathParams pathParams;
    public RemoveFollowersRequest withPathParams(RemoveFollowersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveFollowersQueryParams queryParams;
    public RemoveFollowersRequest withQueryParams(RemoveFollowersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveFollowersRequestBody request;
    public RemoveFollowersRequest withRequest(RemoveFollowersRequestBody request) {
        this.request = request;
        return this;
    }
}