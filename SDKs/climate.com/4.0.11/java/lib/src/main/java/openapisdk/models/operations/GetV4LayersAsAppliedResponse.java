package openapisdk.models.operations;



public class GetV4LayersAsAppliedResponse {
    public Object applicationActivities;
    public GetV4LayersAsAppliedResponse withApplicationActivities(Object applicationActivities) {
        this.applicationActivities = applicationActivities;
        return this;
    }
    public String contentType;
    public GetV4LayersAsAppliedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetV4LayersAsAppliedResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetV4LayersAsAppliedResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetV4LayersAsAppliedResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetV4LayersAsAppliedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}