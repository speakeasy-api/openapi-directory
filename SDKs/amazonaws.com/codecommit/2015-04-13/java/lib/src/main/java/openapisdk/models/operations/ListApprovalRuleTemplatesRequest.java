package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApprovalRuleTemplatesRequest {
    public ListApprovalRuleTemplatesQueryParams queryParams;
    public ListApprovalRuleTemplatesRequest withQueryParams(ListApprovalRuleTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListApprovalRuleTemplatesHeaders headers;
    public ListApprovalRuleTemplatesRequest withHeaders(ListApprovalRuleTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListApprovalRuleTemplatesInput request;
    public ListApprovalRuleTemplatesRequest withRequest(openapisdk.models.shared.ListApprovalRuleTemplatesInput request) {
        this.request = request;
        return this;
    }
}