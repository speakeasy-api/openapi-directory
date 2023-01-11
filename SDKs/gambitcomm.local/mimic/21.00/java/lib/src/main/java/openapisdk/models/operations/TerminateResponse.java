package openapisdk.models.operations;



public class TerminateResponse {
    public String contentType;
    public TerminateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TerminateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> terminate200ApplicationJSONObject;
    public TerminateResponse withTerminate200ApplicationJsonObject(java.util.Map<String, Integer> terminate200ApplicationJSONObject) {
        this.terminate200ApplicationJSONObject = terminate200ApplicationJSONObject;
        return this;
    }
}