package openapisdk.models.operations;



public class SublabsListResponse {
    public String contentType;
    public SublabsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SublabsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SublabsList200ApplicationJson sublabsList200ApplicationJSONObject;
    public SublabsListResponse withSublabsList200ApplicationJsonObject(SublabsList200ApplicationJson sublabsList200ApplicationJSONObject) {
        this.sublabsList200ApplicationJSONObject = sublabsList200ApplicationJSONObject;
        return this;
    }
}