package openapisdk.models.operations;



public class CemstResponse {
    public String contentType;
    public CemstResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CemstResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Cemst400ApplicationJson cemst400ApplicationJSONObject;
    public CemstResponse withCemst400ApplicationJsonObject(Cemst400ApplicationJson cemst400ApplicationJSONObject) {
        this.cemst400ApplicationJSONObject = cemst400ApplicationJSONObject;
        return this;
    }
    public Cemst401ApplicationJson cemst401ApplicationJSONObject;
    public CemstResponse withCemst401ApplicationJsonObject(Cemst401ApplicationJson cemst401ApplicationJSONObject) {
        this.cemst401ApplicationJSONObject = cemst401ApplicationJSONObject;
        return this;
    }
    public Cemst404ApplicationJson cemst404ApplicationJSONObject;
    public CemstResponse withCemst404ApplicationJsonObject(Cemst404ApplicationJson cemst404ApplicationJSONObject) {
        this.cemst404ApplicationJSONObject = cemst404ApplicationJSONObject;
        return this;
    }
    public Cemst500ApplicationJson cemst500ApplicationJSONObject;
    public CemstResponse withCemst500ApplicationJsonObject(Cemst500ApplicationJson cemst500ApplicationJSONObject) {
        this.cemst500ApplicationJSONObject = cemst500ApplicationJSONObject;
        return this;
    }
    public Cemst502ApplicationJson cemst502ApplicationJSONObject;
    public CemstResponse withCemst502ApplicationJsonObject(Cemst502ApplicationJson cemst502ApplicationJSONObject) {
        this.cemst502ApplicationJSONObject = cemst502ApplicationJSONObject;
        return this;
    }
    public Cemst503ApplicationJson cemst503ApplicationJSONObject;
    public CemstResponse withCemst503ApplicationJsonObject(Cemst503ApplicationJson cemst503ApplicationJSONObject) {
        this.cemst503ApplicationJSONObject = cemst503ApplicationJSONObject;
        return this;
    }
    public Cemst504ApplicationJson cemst504ApplicationJSONObject;
    public CemstResponse withCemst504ApplicationJsonObject(Cemst504ApplicationJson cemst504ApplicationJSONObject) {
        this.cemst504ApplicationJSONObject = cemst504ApplicationJSONObject;
        return this;
    }
}