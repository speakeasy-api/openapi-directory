package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsUpdateReviewRequest {
    public PullsUpdateReviewPathParams pathParams;
    public PullsUpdateReviewRequest withPathParams(PullsUpdateReviewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PullsUpdateReviewRequestBody request;
    public PullsUpdateReviewRequest withRequest(PullsUpdateReviewRequestBody request) {
        this.request = request;
        return this;
    }
}