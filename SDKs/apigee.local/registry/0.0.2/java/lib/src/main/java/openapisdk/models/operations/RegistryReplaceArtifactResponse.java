package openapisdk.models.operations;



public class RegistryReplaceArtifactResponse {
    public Object artifact;
    public RegistryReplaceArtifactResponse withArtifact(Object artifact) {
        this.artifact = artifact;
        return this;
    }
    public String contentType;
    public RegistryReplaceArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistryReplaceArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}