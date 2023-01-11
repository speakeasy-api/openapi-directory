package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommentsForPullRequestRequest {
    public GetCommentsForPullRequestQueryParams queryParams;
    public GetCommentsForPullRequestRequest withQueryParams(GetCommentsForPullRequestQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCommentsForPullRequestHeaders headers;
    public GetCommentsForPullRequestRequest withHeaders(GetCommentsForPullRequestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCommentsForPullRequestInput request;
    public GetCommentsForPullRequestRequest withRequest(openapisdk.models.shared.GetCommentsForPullRequestInput request) {
        this.request = request;
        return this;
    }
}