package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePullRequestApprovalStateRequest {
    public UpdatePullRequestApprovalStateHeaders headers;
    public UpdatePullRequestApprovalStateRequest withHeaders(UpdatePullRequestApprovalStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePullRequestApprovalStateInput request;
    public UpdatePullRequestApprovalStateRequest withRequest(openapisdk.models.shared.UpdatePullRequestApprovalStateInput request) {
        this.request = request;
        return this;
    }
}