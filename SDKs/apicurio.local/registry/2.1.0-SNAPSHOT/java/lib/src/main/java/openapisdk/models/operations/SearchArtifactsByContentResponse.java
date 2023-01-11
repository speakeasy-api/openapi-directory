package openapisdk.models.operations;



public class SearchArtifactsByContentResponse {
    public openapisdk.models.shared.ArtifactSearchResults artifactSearchResults;
    public SearchArtifactsByContentResponse withArtifactSearchResults(openapisdk.models.shared.ArtifactSearchResults artifactSearchResults) {
        this.artifactSearchResults = artifactSearchResults;
        return this;
    }
    public String contentType;
    public SearchArtifactsByContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public SearchArtifactsByContentResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public SearchArtifactsByContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}