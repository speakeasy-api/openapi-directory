package openapisdk.models.operations;



public class GicerResponse {
    public String contentType;
    public GicerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GicerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Gicer400ApplicationJson gicer400ApplicationJSONObject;
    public GicerResponse withGicer400ApplicationJsonObject(Gicer400ApplicationJson gicer400ApplicationJSONObject) {
        this.gicer400ApplicationJSONObject = gicer400ApplicationJSONObject;
        return this;
    }
    public Gicer401ApplicationJson gicer401ApplicationJSONObject;
    public GicerResponse withGicer401ApplicationJsonObject(Gicer401ApplicationJson gicer401ApplicationJSONObject) {
        this.gicer401ApplicationJSONObject = gicer401ApplicationJSONObject;
        return this;
    }
    public Gicer404ApplicationJson gicer404ApplicationJSONObject;
    public GicerResponse withGicer404ApplicationJsonObject(Gicer404ApplicationJson gicer404ApplicationJSONObject) {
        this.gicer404ApplicationJSONObject = gicer404ApplicationJSONObject;
        return this;
    }
    public Gicer500ApplicationJson gicer500ApplicationJSONObject;
    public GicerResponse withGicer500ApplicationJsonObject(Gicer500ApplicationJson gicer500ApplicationJSONObject) {
        this.gicer500ApplicationJSONObject = gicer500ApplicationJSONObject;
        return this;
    }
    public Gicer502ApplicationJson gicer502ApplicationJSONObject;
    public GicerResponse withGicer502ApplicationJsonObject(Gicer502ApplicationJson gicer502ApplicationJSONObject) {
        this.gicer502ApplicationJSONObject = gicer502ApplicationJSONObject;
        return this;
    }
    public Gicer503ApplicationJson gicer503ApplicationJSONObject;
    public GicerResponse withGicer503ApplicationJsonObject(Gicer503ApplicationJson gicer503ApplicationJSONObject) {
        this.gicer503ApplicationJSONObject = gicer503ApplicationJSONObject;
        return this;
    }
    public Gicer504ApplicationJson gicer504ApplicationJSONObject;
    public GicerResponse withGicer504ApplicationJsonObject(Gicer504ApplicationJson gicer504ApplicationJSONObject) {
        this.gicer504ApplicationJSONObject = gicer504ApplicationJSONObject;
        return this;
    }
}