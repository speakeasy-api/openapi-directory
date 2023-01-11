package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateDiscussionCommentLegacyRequest {
    public TeamsUpdateDiscussionCommentLegacyPathParams pathParams;
    public TeamsUpdateDiscussionCommentLegacyRequest withPathParams(TeamsUpdateDiscussionCommentLegacyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsUpdateDiscussionCommentLegacyRequestBody request;
    public TeamsUpdateDiscussionCommentLegacyRequest withRequest(TeamsUpdateDiscussionCommentLegacyRequestBody request) {
        this.request = request;
        return this;
    }
}