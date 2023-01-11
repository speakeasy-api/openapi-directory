package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForTeamDiscussionCommentLegacyRequest {
    public ReactionsCreateForTeamDiscussionCommentLegacyPathParams pathParams;
    public ReactionsCreateForTeamDiscussionCommentLegacyRequest withPathParams(ReactionsCreateForTeamDiscussionCommentLegacyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReactionsCreateForTeamDiscussionCommentLegacyRequestBody request;
    public ReactionsCreateForTeamDiscussionCommentLegacyRequest withRequest(ReactionsCreateForTeamDiscussionCommentLegacyRequestBody request) {
        this.request = request;
        return this;
    }
}