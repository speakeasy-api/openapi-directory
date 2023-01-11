package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateDiscussionCommentInOrgRequest {
    public TeamsCreateDiscussionCommentInOrgPathParams pathParams;
    public TeamsCreateDiscussionCommentInOrgRequest withPathParams(TeamsCreateDiscussionCommentInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsCreateDiscussionCommentInOrgRequestBody request;
    public TeamsCreateDiscussionCommentInOrgRequest withRequest(TeamsCreateDiscussionCommentInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}