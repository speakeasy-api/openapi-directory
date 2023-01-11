package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApprovalRuleTemplateNameRequest {
    public UpdateApprovalRuleTemplateNameHeaders headers;
    public UpdateApprovalRuleTemplateNameRequest withHeaders(UpdateApprovalRuleTemplateNameHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateApprovalRuleTemplateNameInput request;
    public UpdateApprovalRuleTemplateNameRequest withRequest(openapisdk.models.shared.UpdateApprovalRuleTemplateNameInput request) {
        this.request = request;
        return this;
    }
}