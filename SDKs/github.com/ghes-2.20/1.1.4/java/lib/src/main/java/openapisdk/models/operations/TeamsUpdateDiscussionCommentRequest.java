package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateDiscussionCommentRequest {
    public TeamsUpdateDiscussionCommentPathParams pathParams;
    public TeamsUpdateDiscussionCommentRequest withPathParams(TeamsUpdateDiscussionCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsUpdateDiscussionCommentRequestBody request;
    public TeamsUpdateDiscussionCommentRequest withRequest(TeamsUpdateDiscussionCommentRequestBody request) {
        this.request = request;
        return this;
    }
}