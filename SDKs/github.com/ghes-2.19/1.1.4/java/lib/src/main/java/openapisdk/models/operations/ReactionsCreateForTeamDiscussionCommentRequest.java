package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForTeamDiscussionCommentRequest {
    public ReactionsCreateForTeamDiscussionCommentPathParams pathParams;
    public ReactionsCreateForTeamDiscussionCommentRequest withPathParams(ReactionsCreateForTeamDiscussionCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReactionsCreateForTeamDiscussionCommentHeaders headers;
    public ReactionsCreateForTeamDiscussionCommentRequest withHeaders(ReactionsCreateForTeamDiscussionCommentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReactionsCreateForTeamDiscussionCommentRequestBody request;
    public ReactionsCreateForTeamDiscussionCommentRequest withRequest(ReactionsCreateForTeamDiscussionCommentRequestBody request) {
        this.request = request;
        return this;
    }
}