package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchAssociateApprovalRuleTemplateWithRepositoriesRequest {
    public BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders headers;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesRequest withHeaders(BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchAssociateApprovalRuleTemplateWithRepositoriesInput request;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesRequest withRequest(openapisdk.models.shared.BatchAssociateApprovalRuleTemplateWithRepositoriesInput request) {
        this.request = request;
        return this;
    }
}