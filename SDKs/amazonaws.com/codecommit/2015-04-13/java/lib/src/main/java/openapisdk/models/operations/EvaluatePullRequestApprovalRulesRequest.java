package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EvaluatePullRequestApprovalRulesRequest {
    public EvaluatePullRequestApprovalRulesHeaders headers;
    public EvaluatePullRequestApprovalRulesRequest withHeaders(EvaluatePullRequestApprovalRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EvaluatePullRequestApprovalRulesInput request;
    public EvaluatePullRequestApprovalRulesRequest withRequest(openapisdk.models.shared.EvaluatePullRequestApprovalRulesInput request) {
        this.request = request;
        return this;
    }
}