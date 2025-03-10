package openapisdk.models.operations;



public class TestUpdateArtifactResponse {
    public String contentType;
    public TestUpdateArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public TestUpdateArtifactResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.RuleViolationError ruleViolationError;
    public TestUpdateArtifactResponse withRuleViolationError(openapisdk.models.shared.RuleViolationError ruleViolationError) {
        this.ruleViolationError = ruleViolationError;
        return this;
    }
    public Long statusCode;
    public TestUpdateArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}