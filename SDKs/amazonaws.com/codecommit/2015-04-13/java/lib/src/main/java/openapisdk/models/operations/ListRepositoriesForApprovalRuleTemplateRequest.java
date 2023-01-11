package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRepositoriesForApprovalRuleTemplateRequest {
    public ListRepositoriesForApprovalRuleTemplateQueryParams queryParams;
    public ListRepositoriesForApprovalRuleTemplateRequest withQueryParams(ListRepositoriesForApprovalRuleTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRepositoriesForApprovalRuleTemplateHeaders headers;
    public ListRepositoriesForApprovalRuleTemplateRequest withHeaders(ListRepositoriesForApprovalRuleTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRepositoriesForApprovalRuleTemplateInput request;
    public ListRepositoriesForApprovalRuleTemplateRequest withRequest(openapisdk.models.shared.ListRepositoriesForApprovalRuleTemplateInput request) {
        this.request = request;
        return this;
    }
}