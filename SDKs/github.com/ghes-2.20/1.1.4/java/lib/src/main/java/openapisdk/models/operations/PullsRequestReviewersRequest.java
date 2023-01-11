package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsRequestReviewersRequest {
    public PullsRequestReviewersPathParams pathParams;
    public PullsRequestReviewersRequest withPathParams(PullsRequestReviewersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PullsRequestReviewersRequestBody request;
    public PullsRequestReviewersRequest withRequest(PullsRequestReviewersRequestBody request) {
        this.request = request;
        return this;
    }
}