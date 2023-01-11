package openapisdk.models.operations;



public class ActionsGetArtifactResponse {
    public String contentType;
    public ActionsGetArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Artifact artifact;
    public ActionsGetArtifactResponse withArtifact(openapisdk.models.shared.Artifact artifact) {
        this.artifact = artifact;
        return this;
    }
}