package openapisdk.models.operations;



public class AccessLoadResponse {
    public String contentType;
    public AccessLoadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccessLoadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] accessLoad200ApplicationJSONStrings;
    public AccessLoadResponse withAccessLoad200ApplicationJsonStrings(String[] accessLoad200ApplicationJSONStrings) {
        this.accessLoad200ApplicationJSONStrings = accessLoad200ApplicationJSONStrings;
        return this;
    }
}