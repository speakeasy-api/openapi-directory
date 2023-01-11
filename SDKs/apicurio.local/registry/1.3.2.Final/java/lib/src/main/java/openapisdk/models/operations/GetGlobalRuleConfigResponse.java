package openapisdk.models.operations;



public class GetGlobalRuleConfigResponse {
    public String contentType;
    public GetGlobalRuleConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetGlobalRuleConfigResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Rule rule;
    public GetGlobalRuleConfigResponse withRule(openapisdk.models.shared.Rule rule) {
        this.rule = rule;
        return this;
    }
    public Long statusCode;
    public GetGlobalRuleConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}