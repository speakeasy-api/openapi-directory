package openapisdk.models.operations;



public class ChecksListSuitesForRefResponse {
    public String contentType;
    public ChecksListSuitesForRefResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ChecksListSuitesForRefResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ChecksListSuitesForRefResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ChecksListSuitesForRef200ApplicationJson checksListSuitesForRef200ApplicationJSONObject;
    public ChecksListSuitesForRefResponse withChecksListSuitesForRef200ApplicationJsonObject(ChecksListSuitesForRef200ApplicationJson checksListSuitesForRef200ApplicationJSONObject) {
        this.checksListSuitesForRef200ApplicationJSONObject = checksListSuitesForRef200ApplicationJSONObject;
        return this;
    }
}