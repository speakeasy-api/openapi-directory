package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveFollowersForProjectRequest {
    public RemoveFollowersForProjectPathParams pathParams;
    public RemoveFollowersForProjectRequest withPathParams(RemoveFollowersForProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveFollowersForProjectQueryParams queryParams;
    public RemoveFollowersForProjectRequest withQueryParams(RemoveFollowersForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveFollowersForProjectRequestBody request;
    public RemoveFollowersForProjectRequest withRequest(RemoveFollowersForProjectRequestBody request) {
        this.request = request;
        return this;
    }
}