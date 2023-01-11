package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsUpdateReviewCommentRequest {
    public PullsUpdateReviewCommentPathParams pathParams;
    public PullsUpdateReviewCommentRequest withPathParams(PullsUpdateReviewCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PullsUpdateReviewCommentRequestBody request;
    public PullsUpdateReviewCommentRequest withRequest(PullsUpdateReviewCommentRequestBody request) {
        this.request = request;
        return this;
    }
}