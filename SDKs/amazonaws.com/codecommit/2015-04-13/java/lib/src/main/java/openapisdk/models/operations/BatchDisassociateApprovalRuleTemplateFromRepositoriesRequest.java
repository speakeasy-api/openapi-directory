package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest {
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesHeaders headers;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest withHeaders(BatchDisassociateApprovalRuleTemplateFromRepositoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput request;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest withRequest(openapisdk.models.shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput request) {
        this.request = request;
        return this;
    }
}