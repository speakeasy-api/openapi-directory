package openapisdk.models.operations;



public class UpdateGlobalRuleConfigResponse {
    public String contentType;
    public UpdateGlobalRuleConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateGlobalRuleConfigResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Rule rule;
    public UpdateGlobalRuleConfigResponse withRule(openapisdk.models.shared.Rule rule) {
        this.rule = rule;
        return this;
    }
    public Long statusCode;
    public UpdateGlobalRuleConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}