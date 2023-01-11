package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForPullRequestReviewCommentRequest {
    public ReactionsCreateForPullRequestReviewCommentPathParams pathParams;
    public ReactionsCreateForPullRequestReviewCommentRequest withPathParams(ReactionsCreateForPullRequestReviewCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReactionsCreateForPullRequestReviewCommentRequestBody request;
    public ReactionsCreateForPullRequestReviewCommentRequest withRequest(ReactionsCreateForPullRequestReviewCommentRequestBody request) {
        this.request = request;
        return this;
    }
}