package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePullRequestTitleRequest {
    public UpdatePullRequestTitleHeaders headers;
    public UpdatePullRequestTitleRequest withHeaders(UpdatePullRequestTitleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePullRequestTitleInput request;
    public UpdatePullRequestTitleRequest withRequest(openapisdk.models.shared.UpdatePullRequestTitleInput request) {
        this.request = request;
        return this;
    }
}