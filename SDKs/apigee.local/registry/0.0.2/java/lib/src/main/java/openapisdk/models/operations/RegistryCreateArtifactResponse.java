package openapisdk.models.operations;



public class RegistryCreateArtifactResponse {
    public Object artifact;
    public RegistryCreateArtifactResponse withArtifact(Object artifact) {
        this.artifact = artifact;
        return this;
    }
    public String contentType;
    public RegistryCreateArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistryCreateArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}