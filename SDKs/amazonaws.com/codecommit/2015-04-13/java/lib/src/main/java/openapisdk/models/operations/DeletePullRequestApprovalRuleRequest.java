package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePullRequestApprovalRuleRequest {
    public DeletePullRequestApprovalRuleHeaders headers;
    public DeletePullRequestApprovalRuleRequest withHeaders(DeletePullRequestApprovalRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePullRequestApprovalRuleInput request;
    public DeletePullRequestApprovalRuleRequest withRequest(openapisdk.models.shared.DeletePullRequestApprovalRuleInput request) {
        this.request = request;
        return this;
    }
}