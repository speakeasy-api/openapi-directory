package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsCreateReviewCommentRequest {
    public PullsCreateReviewCommentPathParams pathParams;
    public PullsCreateReviewCommentRequest withPathParams(PullsCreateReviewCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PullsCreateReviewCommentRequestBody request;
    public PullsCreateReviewCommentRequest withRequest(PullsCreateReviewCommentRequestBody request) {
        this.request = request;
        return this;
    }
}