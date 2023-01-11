package openapisdk.models.operations;



public class PatchAppsAppIdRulesRuleIdResponse {
    public String contentType;
    public PatchAppsAppIdRulesRuleIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchAppsAppIdRulesRuleIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PatchAppsAppIdRulesRuleIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Object ruleResponse;
    public PatchAppsAppIdRulesRuleIdResponse withRuleResponse(Object ruleResponse) {
        this.ruleResponse = ruleResponse;
        return this;
    }
}