package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateApprovalRuleTemplateWithRepositoryRequest {
    public AssociateApprovalRuleTemplateWithRepositoryHeaders headers;
    public AssociateApprovalRuleTemplateWithRepositoryRequest withHeaders(AssociateApprovalRuleTemplateWithRepositoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateApprovalRuleTemplateWithRepositoryInput request;
    public AssociateApprovalRuleTemplateWithRepositoryRequest withRequest(openapisdk.models.shared.AssociateApprovalRuleTemplateWithRepositoryInput request) {
        this.request = request;
        return this;
    }
}