package openapisdk.models.operations;



public class CreateArtifactResponse {
    public openapisdk.models.shared.ArtifactMetaData artifactMetaData;
    public CreateArtifactResponse withArtifactMetaData(openapisdk.models.shared.ArtifactMetaData artifactMetaData) {
        this.artifactMetaData = artifactMetaData;
        return this;
    }
    public String contentType;
    public CreateArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateArtifactResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.RuleViolationError ruleViolationError;
    public CreateArtifactResponse withRuleViolationError(openapisdk.models.shared.RuleViolationError ruleViolationError) {
        this.ruleViolationError = ruleViolationError;
        return this;
    }
    public Long statusCode;
    public CreateArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}