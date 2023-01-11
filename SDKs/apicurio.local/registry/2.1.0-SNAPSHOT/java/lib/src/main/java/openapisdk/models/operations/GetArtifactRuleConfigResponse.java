package openapisdk.models.operations;



public class GetArtifactRuleConfigResponse {
    public String contentType;
    public GetArtifactRuleConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetArtifactRuleConfigResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Rule rule;
    public GetArtifactRuleConfigResponse withRule(openapisdk.models.shared.Rule rule) {
        this.rule = rule;
        return this;
    }
    public Long statusCode;
    public GetArtifactRuleConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}