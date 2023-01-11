package openapisdk.models.operations;



public class AccessSaveResponse {
    public String contentType;
    public AccessSaveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccessSaveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] accessSave200ApplicationJSONStrings;
    public AccessSaveResponse withAccessSave200ApplicationJsonStrings(String[] accessSave200ApplicationJSONStrings) {
        this.accessSave200ApplicationJSONStrings = accessSave200ApplicationJSONStrings;
        return this;
    }
}