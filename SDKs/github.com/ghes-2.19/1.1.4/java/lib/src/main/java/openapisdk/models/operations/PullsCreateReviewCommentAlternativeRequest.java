package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsCreateReviewCommentAlternativeRequest {
    public PullsCreateReviewCommentAlternativePathParams pathParams;
    public PullsCreateReviewCommentAlternativeRequest withPathParams(PullsCreateReviewCommentAlternativePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PullsCreateReviewCommentAlternativeRequestBody request;
    public PullsCreateReviewCommentAlternativeRequest withRequest(PullsCreateReviewCommentAlternativeRequestBody request) {
        this.request = request;
        return this;
    }
}