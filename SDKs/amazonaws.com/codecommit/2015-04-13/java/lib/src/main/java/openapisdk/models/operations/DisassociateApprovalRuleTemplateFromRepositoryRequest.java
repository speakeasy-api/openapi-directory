package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateApprovalRuleTemplateFromRepositoryRequest {
    public DisassociateApprovalRuleTemplateFromRepositoryHeaders headers;
    public DisassociateApprovalRuleTemplateFromRepositoryRequest withHeaders(DisassociateApprovalRuleTemplateFromRepositoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateApprovalRuleTemplateFromRepositoryInput request;
    public DisassociateApprovalRuleTemplateFromRepositoryRequest withRequest(openapisdk.models.shared.DisassociateApprovalRuleTemplateFromRepositoryInput request) {
        this.request = request;
        return this;
    }
}