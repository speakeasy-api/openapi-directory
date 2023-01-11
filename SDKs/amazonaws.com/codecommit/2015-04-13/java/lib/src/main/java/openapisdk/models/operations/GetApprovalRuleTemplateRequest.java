package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApprovalRuleTemplateRequest {
    public GetApprovalRuleTemplateHeaders headers;
    public GetApprovalRuleTemplateRequest withHeaders(GetApprovalRuleTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetApprovalRuleTemplateInput request;
    public GetApprovalRuleTemplateRequest withRequest(openapisdk.models.shared.GetApprovalRuleTemplateInput request) {
        this.request = request;
        return this;
    }
}