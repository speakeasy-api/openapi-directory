package openapisdk.models.operations;



public class ListArtifactRulesResponse {
    public String contentType;
    public ListArtifactRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ListArtifactRulesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.RuleTypeEnum[] ruleTypes;
    public ListArtifactRulesResponse withRuleTypes(openapisdk.models.shared.RuleTypeEnum[] ruleTypes) {
        this.ruleTypes = ruleTypes;
        return this;
    }
    public Long statusCode;
    public ListArtifactRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}