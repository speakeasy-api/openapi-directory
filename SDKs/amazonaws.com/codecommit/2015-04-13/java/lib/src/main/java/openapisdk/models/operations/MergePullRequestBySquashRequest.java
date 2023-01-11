package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergePullRequestBySquashRequest {
    public MergePullRequestBySquashHeaders headers;
    public MergePullRequestBySquashRequest withHeaders(MergePullRequestBySquashHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MergePullRequestBySquashInput request;
    public MergePullRequestBySquashRequest withRequest(openapisdk.models.shared.MergePullRequestBySquashInput request) {
        this.request = request;
        return this;
    }
}