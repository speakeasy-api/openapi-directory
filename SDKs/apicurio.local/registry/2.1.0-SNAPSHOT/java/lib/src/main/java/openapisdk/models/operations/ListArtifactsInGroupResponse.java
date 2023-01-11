package openapisdk.models.operations;



public class ListArtifactsInGroupResponse {
    public openapisdk.models.shared.ArtifactSearchResults artifactSearchResults;
    public ListArtifactsInGroupResponse withArtifactSearchResults(openapisdk.models.shared.ArtifactSearchResults artifactSearchResults) {
        this.artifactSearchResults = artifactSearchResults;
        return this;
    }
    public String contentType;
    public ListArtifactsInGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ListArtifactsInGroupResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public ListArtifactsInGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}