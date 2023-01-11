package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPullRequestOverrideStateRequest {
    public GetPullRequestOverrideStateHeaders headers;
    public GetPullRequestOverrideStateRequest withHeaders(GetPullRequestOverrideStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPullRequestOverrideStateInput request;
    public GetPullRequestOverrideStateRequest withRequest(openapisdk.models.shared.GetPullRequestOverrideStateInput request) {
        this.request = request;
        return this;
    }
}