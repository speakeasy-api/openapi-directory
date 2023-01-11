package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePullRequestApprovalRuleContentRequest {
    public UpdatePullRequestApprovalRuleContentHeaders headers;
    public UpdatePullRequestApprovalRuleContentRequest withHeaders(UpdatePullRequestApprovalRuleContentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePullRequestApprovalRuleContentInput request;
    public UpdatePullRequestApprovalRuleContentRequest withRequest(openapisdk.models.shared.UpdatePullRequestApprovalRuleContentInput request) {
        this.request = request;
        return this;
    }
}