package openapisdk.models.operations;



public class ChecksListForRefResponse {
    public String contentType;
    public ChecksListForRefResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ChecksListForRefResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ChecksListForRefResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ChecksListForRef200ApplicationJson checksListForRef200ApplicationJSONObject;
    public ChecksListForRefResponse withChecksListForRef200ApplicationJsonObject(ChecksListForRef200ApplicationJson checksListForRef200ApplicationJSONObject) {
        this.checksListForRef200ApplicationJSONObject = checksListForRef200ApplicationJSONObject;
        return this;
    }
}