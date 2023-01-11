package openapisdk.models.operations;



public class GetLatestArtifactResponse {
    public String contentType;
    public GetLatestArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetLatestArtifactResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public byte[] fileContent;
    public GetLatestArtifactResponse withFileContent(byte[] fileContent) {
        this.fileContent = fileContent;
        return this;
    }
    public Long statusCode;
    public GetLatestArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}