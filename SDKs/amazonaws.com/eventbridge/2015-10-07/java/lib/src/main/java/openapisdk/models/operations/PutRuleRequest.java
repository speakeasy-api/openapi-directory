package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRuleRequest {
    public PutRuleHeaders headers;
    public PutRuleRequest withHeaders(PutRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRuleRequest request;
    public PutRuleRequest withRequest(openapisdk.models.shared.PutRuleRequest request) {
        this.request = request;
        return this;
    }
}