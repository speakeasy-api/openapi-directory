package openapisdk.models.operations;



public class GetAppsAppIdRulesResponse {
    public String contentType;
    public GetAppsAppIdRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAppsAppIdRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetAppsAppIdRulesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Object[] ruleResponses;
    public GetAppsAppIdRulesResponse withRuleResponses(Object[] ruleResponses) {
        this.ruleResponses = ruleResponses;
        return this;
    }
}