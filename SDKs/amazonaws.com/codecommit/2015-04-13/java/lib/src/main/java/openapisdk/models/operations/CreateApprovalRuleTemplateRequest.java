package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApprovalRuleTemplateRequest {
    public CreateApprovalRuleTemplateHeaders headers;
    public CreateApprovalRuleTemplateRequest withHeaders(CreateApprovalRuleTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateApprovalRuleTemplateInput request;
    public CreateApprovalRuleTemplateRequest withRequest(openapisdk.models.shared.CreateApprovalRuleTemplateInput request) {
        this.request = request;
        return this;
    }
}