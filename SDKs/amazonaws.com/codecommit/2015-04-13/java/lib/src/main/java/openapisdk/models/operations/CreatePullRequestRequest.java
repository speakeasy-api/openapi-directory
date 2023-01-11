package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePullRequestRequest {
    public CreatePullRequestHeaders headers;
    public CreatePullRequestRequest withHeaders(CreatePullRequestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePullRequestInput request;
    public CreatePullRequestRequest withRequest(openapisdk.models.shared.CreatePullRequestInput request) {
        this.request = request;
        return this;
    }
}