package openapisdk.models.operations;



public class ListArtifactVersionsResponse {
    public String contentType;
    public ListArtifactVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ListArtifactVersionsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public ListArtifactVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VersionSearchResults versionSearchResults;
    public ListArtifactVersionsResponse withVersionSearchResults(openapisdk.models.shared.VersionSearchResults versionSearchResults) {
        this.versionSearchResults = versionSearchResults;
        return this;
    }
}