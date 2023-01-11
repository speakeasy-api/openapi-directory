package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsCreateReviewRequest {
    public PullsCreateReviewPathParams pathParams;
    public PullsCreateReviewRequest withPathParams(PullsCreateReviewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PullsCreateReviewRequestBody request;
    public PullsCreateReviewRequest withRequest(PullsCreateReviewRequestBody request) {
        this.request = request;
        return this;
    }
}