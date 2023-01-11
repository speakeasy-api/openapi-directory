package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApprovalRuleTemplateDescriptionRequest {
    public UpdateApprovalRuleTemplateDescriptionHeaders headers;
    public UpdateApprovalRuleTemplateDescriptionRequest withHeaders(UpdateApprovalRuleTemplateDescriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateApprovalRuleTemplateDescriptionInput request;
    public UpdateApprovalRuleTemplateDescriptionRequest withRequest(openapisdk.models.shared.UpdateApprovalRuleTemplateDescriptionInput request) {
        this.request = request;
        return this;
    }
}