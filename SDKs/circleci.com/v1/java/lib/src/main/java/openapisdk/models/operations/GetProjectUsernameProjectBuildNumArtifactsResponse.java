package openapisdk.models.operations;



public class GetProjectUsernameProjectBuildNumArtifactsResponse {
    public openapisdk.models.shared.Artifact[] artifacts;
    public GetProjectUsernameProjectBuildNumArtifactsResponse withArtifacts(openapisdk.models.shared.Artifact[] artifacts) {
        this.artifacts = artifacts;
        return this;
    }
    public String contentType;
    public GetProjectUsernameProjectBuildNumArtifactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProjectUsernameProjectBuildNumArtifactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}