package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPullRequestsRequest {
    public ListPullRequestsQueryParams queryParams;
    public ListPullRequestsRequest withQueryParams(ListPullRequestsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPullRequestsHeaders headers;
    public ListPullRequestsRequest withHeaders(ListPullRequestsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPullRequestsInput request;
    public ListPullRequestsRequest withRequest(openapisdk.models.shared.ListPullRequestsInput request) {
        this.request = request;
        return this;
    }
}