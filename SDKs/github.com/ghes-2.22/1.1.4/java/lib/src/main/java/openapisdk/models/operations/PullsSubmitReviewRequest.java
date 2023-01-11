package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsSubmitReviewRequest {
    public PullsSubmitReviewPathParams pathParams;
    public PullsSubmitReviewRequest withPathParams(PullsSubmitReviewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PullsSubmitReviewRequestBody request;
    public PullsSubmitReviewRequest withRequest(PullsSubmitReviewRequestBody request) {
        this.request = request;
        return this;
    }
}