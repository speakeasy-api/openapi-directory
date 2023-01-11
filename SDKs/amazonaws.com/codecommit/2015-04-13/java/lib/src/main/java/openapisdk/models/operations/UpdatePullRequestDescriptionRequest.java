package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePullRequestDescriptionRequest {
    public UpdatePullRequestDescriptionHeaders headers;
    public UpdatePullRequestDescriptionRequest withHeaders(UpdatePullRequestDescriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePullRequestDescriptionInput request;
    public UpdatePullRequestDescriptionRequest withRequest(openapisdk.models.shared.UpdatePullRequestDescriptionInput request) {
        this.request = request;
        return this;
    }
}