package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssociatedApprovalRuleTemplatesForRepositoryRequest {
    public ListAssociatedApprovalRuleTemplatesForRepositoryQueryParams queryParams;
    public ListAssociatedApprovalRuleTemplatesForRepositoryRequest withQueryParams(ListAssociatedApprovalRuleTemplatesForRepositoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssociatedApprovalRuleTemplatesForRepositoryHeaders headers;
    public ListAssociatedApprovalRuleTemplatesForRepositoryRequest withHeaders(ListAssociatedApprovalRuleTemplatesForRepositoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAssociatedApprovalRuleTemplatesForRepositoryInput request;
    public ListAssociatedApprovalRuleTemplatesForRepositoryRequest withRequest(openapisdk.models.shared.ListAssociatedApprovalRuleTemplatesForRepositoryInput request) {
        this.request = request;
        return this;
    }
}