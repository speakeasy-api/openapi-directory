package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTransactionRulesTransactionRuleIdRequest {
    public PatchTransactionRulesTransactionRuleIdPathParams pathParams;
    public PatchTransactionRulesTransactionRuleIdRequest withPathParams(PatchTransactionRulesTransactionRuleIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PatchTransactionRulesTransactionRuleIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PatchTransactionRulesTransactionRuleIdSecurity security;
    public PatchTransactionRulesTransactionRuleIdRequest withSecurity(PatchTransactionRulesTransactionRuleIdSecurity security) {
        this.security = security;
        return this;
    }
}