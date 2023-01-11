package openapisdk.models.operations;



public class LicerResponse {
    public String contentType;
    public LicerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LicerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Licer400ApplicationJson licer400ApplicationJSONObject;
    public LicerResponse withLicer400ApplicationJsonObject(Licer400ApplicationJson licer400ApplicationJSONObject) {
        this.licer400ApplicationJSONObject = licer400ApplicationJSONObject;
        return this;
    }
    public Licer401ApplicationJson licer401ApplicationJSONObject;
    public LicerResponse withLicer401ApplicationJsonObject(Licer401ApplicationJson licer401ApplicationJSONObject) {
        this.licer401ApplicationJSONObject = licer401ApplicationJSONObject;
        return this;
    }
    public Licer404ApplicationJson licer404ApplicationJSONObject;
    public LicerResponse withLicer404ApplicationJsonObject(Licer404ApplicationJson licer404ApplicationJSONObject) {
        this.licer404ApplicationJSONObject = licer404ApplicationJSONObject;
        return this;
    }
    public Licer500ApplicationJson licer500ApplicationJSONObject;
    public LicerResponse withLicer500ApplicationJsonObject(Licer500ApplicationJson licer500ApplicationJSONObject) {
        this.licer500ApplicationJSONObject = licer500ApplicationJSONObject;
        return this;
    }
    public Licer502ApplicationJson licer502ApplicationJSONObject;
    public LicerResponse withLicer502ApplicationJsonObject(Licer502ApplicationJson licer502ApplicationJSONObject) {
        this.licer502ApplicationJSONObject = licer502ApplicationJSONObject;
        return this;
    }
    public Licer503ApplicationJson licer503ApplicationJSONObject;
    public LicerResponse withLicer503ApplicationJsonObject(Licer503ApplicationJson licer503ApplicationJSONObject) {
        this.licer503ApplicationJSONObject = licer503ApplicationJSONObject;
        return this;
    }
    public Licer504ApplicationJson licer504ApplicationJSONObject;
    public LicerResponse withLicer504ApplicationJsonObject(Licer504ApplicationJson licer504ApplicationJSONObject) {
        this.licer504ApplicationJSONObject = licer504ApplicationJSONObject;
        return this;
    }
}