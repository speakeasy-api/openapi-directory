package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProjectUsernameProjectRequest {
    public PostProjectUsernameProjectPathParams pathParams;
    public PostProjectUsernameProjectRequest withPathParams(PostProjectUsernameProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostProjectUsernameProjectRequestBody request;
    public PostProjectUsernameProjectRequest withRequest(PostProjectUsernameProjectRequestBody request) {
        this.request = request;
        return this;
    }
}