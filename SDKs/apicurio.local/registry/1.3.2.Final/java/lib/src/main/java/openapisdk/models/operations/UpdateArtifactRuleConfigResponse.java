package openapisdk.models.operations;



public class UpdateArtifactRuleConfigResponse {
    public String contentType;
    public UpdateArtifactRuleConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateArtifactRuleConfigResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Rule rule;
    public UpdateArtifactRuleConfigResponse withRule(openapisdk.models.shared.Rule rule) {
        this.rule = rule;
        return this;
    }
    public Long statusCode;
    public UpdateArtifactRuleConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}