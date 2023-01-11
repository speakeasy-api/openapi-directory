package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApprovalRuleTemplateContentRequest {
    public UpdateApprovalRuleTemplateContentHeaders headers;
    public UpdateApprovalRuleTemplateContentRequest withHeaders(UpdateApprovalRuleTemplateContentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateApprovalRuleTemplateContentInput request;
    public UpdateApprovalRuleTemplateContentRequest withRequest(openapisdk.models.shared.UpdateApprovalRuleTemplateContentInput request) {
        this.request = request;
        return this;
    }
}