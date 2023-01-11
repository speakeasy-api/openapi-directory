package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergePullRequestByFastForwardRequest {
    public MergePullRequestByFastForwardHeaders headers;
    public MergePullRequestByFastForwardRequest withHeaders(MergePullRequestByFastForwardHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MergePullRequestByFastForwardInput request;
    public MergePullRequestByFastForwardRequest withRequest(openapisdk.models.shared.MergePullRequestByFastForwardInput request) {
        this.request = request;
        return this;
    }
}