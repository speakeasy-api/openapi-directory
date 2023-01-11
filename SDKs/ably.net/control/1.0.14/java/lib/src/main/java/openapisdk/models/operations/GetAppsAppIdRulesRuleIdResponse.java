package openapisdk.models.operations;



public class GetAppsAppIdRulesRuleIdResponse {
    public String contentType;
    public GetAppsAppIdRulesRuleIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAppsAppIdRulesRuleIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetAppsAppIdRulesRuleIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Object ruleResponse;
    public GetAppsAppIdRulesRuleIdResponse withRuleResponse(Object ruleResponse) {
        this.ruleResponse = ruleResponse;
        return this;
    }
}