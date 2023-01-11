package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccessControlRuleRequest {
    public PutAccessControlRuleHeaders headers;
    public PutAccessControlRuleRequest withHeaders(PutAccessControlRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutAccessControlRuleRequest request;
    public PutAccessControlRuleRequest withRequest(openapisdk.models.shared.PutAccessControlRuleRequest request) {
        this.request = request;
        return this;
    }
}