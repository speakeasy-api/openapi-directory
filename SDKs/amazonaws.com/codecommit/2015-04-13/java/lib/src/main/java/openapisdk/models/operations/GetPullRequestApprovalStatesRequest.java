package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPullRequestApprovalStatesRequest {
    public GetPullRequestApprovalStatesHeaders headers;
    public GetPullRequestApprovalStatesRequest withHeaders(GetPullRequestApprovalStatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPullRequestApprovalStatesInput request;
    public GetPullRequestApprovalStatesRequest withRequest(openapisdk.models.shared.GetPullRequestApprovalStatesInput request) {
        this.request = request;
        return this;
    }
}