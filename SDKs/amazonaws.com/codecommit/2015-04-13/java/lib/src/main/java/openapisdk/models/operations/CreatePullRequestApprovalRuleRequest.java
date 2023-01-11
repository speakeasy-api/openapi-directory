package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePullRequestApprovalRuleRequest {
    public CreatePullRequestApprovalRuleHeaders headers;
    public CreatePullRequestApprovalRuleRequest withHeaders(CreatePullRequestApprovalRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePullRequestApprovalRuleInput request;
    public CreatePullRequestApprovalRuleRequest withRequest(openapisdk.models.shared.CreatePullRequestApprovalRuleInput request) {
        this.request = request;
        return this;
    }
}