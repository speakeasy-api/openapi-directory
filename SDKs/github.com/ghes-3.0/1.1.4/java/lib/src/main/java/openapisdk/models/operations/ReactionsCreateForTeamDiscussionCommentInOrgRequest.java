package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForTeamDiscussionCommentInOrgRequest {
    public ReactionsCreateForTeamDiscussionCommentInOrgPathParams pathParams;
    public ReactionsCreateForTeamDiscussionCommentInOrgRequest withPathParams(ReactionsCreateForTeamDiscussionCommentInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReactionsCreateForTeamDiscussionCommentInOrgRequestBody request;
    public ReactionsCreateForTeamDiscussionCommentInOrgRequest withRequest(ReactionsCreateForTeamDiscussionCommentInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}