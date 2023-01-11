package openapisdk.models.operations;



public class GetV4LayersAsPlantedActivityIdContentsResponse {
    public byte[] body;
    public GetV4LayersAsPlantedActivityIdContentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetV4LayersAsPlantedActivityIdContentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetV4LayersAsPlantedActivityIdContentsResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetV4LayersAsPlantedActivityIdContentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetV4LayersAsPlantedActivityIdContentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetV4LayersAsPlantedActivityIdContentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}