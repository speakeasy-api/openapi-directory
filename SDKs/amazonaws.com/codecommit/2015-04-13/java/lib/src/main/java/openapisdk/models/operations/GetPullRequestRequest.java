package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPullRequestRequest {
    public GetPullRequestHeaders headers;
    public GetPullRequestRequest withHeaders(GetPullRequestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPullRequestInput request;
    public GetPullRequestRequest withRequest(openapisdk.models.shared.GetPullRequestInput request) {
        this.request = request;
        return this;
    }
}