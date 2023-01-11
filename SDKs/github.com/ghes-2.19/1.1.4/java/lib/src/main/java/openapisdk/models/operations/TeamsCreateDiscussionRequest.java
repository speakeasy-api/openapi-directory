package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateDiscussionRequest {
    public TeamsCreateDiscussionPathParams pathParams;
    public TeamsCreateDiscussionRequest withPathParams(TeamsCreateDiscussionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsCreateDiscussionRequestBody request;
    public TeamsCreateDiscussionRequest withRequest(TeamsCreateDiscussionRequestBody request) {
        this.request = request;
        return this;
    }
}