package openapisdk.models.operations;



public class SearchArtifactsResponse {
    public openapisdk.models.shared.ArtifactSearchResults artifactSearchResults;
    public SearchArtifactsResponse withArtifactSearchResults(openapisdk.models.shared.ArtifactSearchResults artifactSearchResults) {
        this.artifactSearchResults = artifactSearchResults;
        return this;
    }
    public String contentType;
    public SearchArtifactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public SearchArtifactsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public SearchArtifactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}