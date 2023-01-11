package openapisdk.models.operations;



public class ListArtifactsResponse {
    public String contentType;
    public ListArtifactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ListArtifactsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public ListArtifactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] listArtifacts200ApplicationJSONStrings;
    public ListArtifactsResponse withListArtifacts200ApplicationJsonStrings(String[] listArtifacts200ApplicationJSONStrings) {
        this.listArtifacts200ApplicationJSONStrings = listArtifacts200ApplicationJSONStrings;
        return this;
    }
}