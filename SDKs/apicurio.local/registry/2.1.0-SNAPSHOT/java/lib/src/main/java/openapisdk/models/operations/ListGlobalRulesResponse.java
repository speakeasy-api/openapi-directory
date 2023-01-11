package openapisdk.models.operations;



public class ListGlobalRulesResponse {
    public String contentType;
    public ListGlobalRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ListGlobalRulesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.RuleTypeEnum[] ruleTypes;
    public ListGlobalRulesResponse withRuleTypes(openapisdk.models.shared.RuleTypeEnum[] ruleTypes) {
        this.ruleTypes = ruleTypes;
        return this;
    }
    public Long statusCode;
    public ListGlobalRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}