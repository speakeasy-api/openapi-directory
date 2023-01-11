package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsDismissReviewRequest {
    public PullsDismissReviewPathParams pathParams;
    public PullsDismissReviewRequest withPathParams(PullsDismissReviewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PullsDismissReviewRequestBody request;
    public PullsDismissReviewRequest withRequest(PullsDismissReviewRequestBody request) {
        this.request = request;
        return this;
    }
}