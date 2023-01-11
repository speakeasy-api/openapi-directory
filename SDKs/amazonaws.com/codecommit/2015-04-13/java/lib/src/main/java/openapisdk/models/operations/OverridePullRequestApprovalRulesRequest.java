package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OverridePullRequestApprovalRulesRequest {
    public OverridePullRequestApprovalRulesHeaders headers;
    public OverridePullRequestApprovalRulesRequest withHeaders(OverridePullRequestApprovalRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OverridePullRequestApprovalRulesInput request;
    public OverridePullRequestApprovalRulesRequest withRequest(openapisdk.models.shared.OverridePullRequestApprovalRulesInput request) {
        this.request = request;
        return this;
    }
}