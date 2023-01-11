package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTransactionRulesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostTransactionRulesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostTransactionRulesSecurity security;
    public PostTransactionRulesRequest withSecurity(PostTransactionRulesSecurity security) {
        this.security = security;
        return this;
    }
}