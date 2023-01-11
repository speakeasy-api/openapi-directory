package openapisdk.models.operations;



public class TrapListResponse {
    public String contentType;
    public TrapListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TrapListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] trapList200ApplicationJSONStrings;
    public TrapListResponse withTrapList200ApplicationJsonStrings(String[] trapList200ApplicationJSONStrings) {
        this.trapList200ApplicationJSONStrings = trapList200ApplicationJSONStrings;
        return this;
    }
}