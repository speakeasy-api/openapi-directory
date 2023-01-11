package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateDiscussionCommentRequest {
    public TeamsCreateDiscussionCommentPathParams pathParams;
    public TeamsCreateDiscussionCommentRequest withPathParams(TeamsCreateDiscussionCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsCreateDiscussionCommentRequestBody request;
    public TeamsCreateDiscussionCommentRequest withRequest(TeamsCreateDiscussionCommentRequestBody request) {
        this.request = request;
        return this;
    }
}