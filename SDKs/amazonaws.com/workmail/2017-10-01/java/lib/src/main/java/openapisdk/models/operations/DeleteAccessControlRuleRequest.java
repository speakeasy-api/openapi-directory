package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccessControlRuleRequest {
    public DeleteAccessControlRuleHeaders headers;
    public DeleteAccessControlRuleRequest withHeaders(DeleteAccessControlRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAccessControlRuleRequest request;
    public DeleteAccessControlRuleRequest withRequest(openapisdk.models.shared.DeleteAccessControlRuleRequest request) {
        this.request = request;
        return this;
    }
}