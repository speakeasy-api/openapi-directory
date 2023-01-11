package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePullRequestStatusRequest {
    public UpdatePullRequestStatusHeaders headers;
    public UpdatePullRequestStatusRequest withHeaders(UpdatePullRequestStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePullRequestStatusInput request;
    public UpdatePullRequestStatusRequest withRequest(openapisdk.models.shared.UpdatePullRequestStatusInput request) {
        this.request = request;
        return this;
    }
}