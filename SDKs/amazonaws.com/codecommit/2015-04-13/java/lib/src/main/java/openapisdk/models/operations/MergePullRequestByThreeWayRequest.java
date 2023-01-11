package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergePullRequestByThreeWayRequest {
    public MergePullRequestByThreeWayHeaders headers;
    public MergePullRequestByThreeWayRequest withHeaders(MergePullRequestByThreeWayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MergePullRequestByThreeWayInput request;
    public MergePullRequestByThreeWayRequest withRequest(openapisdk.models.shared.MergePullRequestByThreeWayInput request) {
        this.request = request;
        return this;
    }
}