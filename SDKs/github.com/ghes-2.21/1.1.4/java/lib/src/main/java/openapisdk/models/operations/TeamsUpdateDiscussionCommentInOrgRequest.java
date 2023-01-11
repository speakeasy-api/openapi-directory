package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateDiscussionCommentInOrgRequest {
    public TeamsUpdateDiscussionCommentInOrgPathParams pathParams;
    public TeamsUpdateDiscussionCommentInOrgRequest withPathParams(TeamsUpdateDiscussionCommentInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsUpdateDiscussionCommentInOrgRequestBody request;
    public TeamsUpdateDiscussionCommentInOrgRequest withRequest(TeamsUpdateDiscussionCommentInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}