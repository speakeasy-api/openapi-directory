package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateDiscussionRequest {
    public TeamsUpdateDiscussionPathParams pathParams;
    public TeamsUpdateDiscussionRequest withPathParams(TeamsUpdateDiscussionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsUpdateDiscussionRequestBody request;
    public TeamsUpdateDiscussionRequest withRequest(TeamsUpdateDiscussionRequestBody request) {
        this.request = request;
        return this;
    }
}