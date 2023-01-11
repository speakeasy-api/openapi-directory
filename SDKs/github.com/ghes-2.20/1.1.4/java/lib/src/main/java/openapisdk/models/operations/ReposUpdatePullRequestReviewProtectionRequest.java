package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdatePullRequestReviewProtectionRequest {
    public ReposUpdatePullRequestReviewProtectionPathParams pathParams;
    public ReposUpdatePullRequestReviewProtectionRequest withPathParams(ReposUpdatePullRequestReviewProtectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposUpdatePullRequestReviewProtectionRequestBody request;
    public ReposUpdatePullRequestReviewProtectionRequest withRequest(ReposUpdatePullRequestReviewProtectionRequestBody request) {
        this.request = request;
        return this;
    }
}