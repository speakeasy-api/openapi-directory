package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFollowersForProjectRequest {
    public AddFollowersForProjectPathParams pathParams;
    public AddFollowersForProjectRequest withPathParams(AddFollowersForProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddFollowersForProjectQueryParams queryParams;
    public AddFollowersForProjectRequest withQueryParams(AddFollowersForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddFollowersForProjectRequestBody request;
    public AddFollowersForProjectRequest withRequest(AddFollowersForProjectRequestBody request) {
        this.request = request;
        return this;
    }
}