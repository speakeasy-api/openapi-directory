package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApprovalRuleTemplateRequest {
    public DeleteApprovalRuleTemplateHeaders headers;
    public DeleteApprovalRuleTemplateRequest withHeaders(DeleteApprovalRuleTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteApprovalRuleTemplateInput request;
    public DeleteApprovalRuleTemplateRequest withRequest(openapisdk.models.shared.DeleteApprovalRuleTemplateInput request) {
        this.request = request;
        return this;
    }
}