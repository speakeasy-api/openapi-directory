package openapisdk.models.operations;



public class RegistryGetArtifactResponse {
    public Object artifact;
    public RegistryGetArtifactResponse withArtifact(Object artifact) {
        this.artifact = artifact;
        return this;
    }
    public String contentType;
    public RegistryGetArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistryGetArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}