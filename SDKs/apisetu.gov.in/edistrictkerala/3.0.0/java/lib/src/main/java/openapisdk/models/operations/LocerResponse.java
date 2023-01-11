package openapisdk.models.operations;



public class LocerResponse {
    public String contentType;
    public LocerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LocerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Locer400ApplicationJson locer400ApplicationJSONObject;
    public LocerResponse withLocer400ApplicationJsonObject(Locer400ApplicationJson locer400ApplicationJSONObject) {
        this.locer400ApplicationJSONObject = locer400ApplicationJSONObject;
        return this;
    }
    public Locer401ApplicationJson locer401ApplicationJSONObject;
    public LocerResponse withLocer401ApplicationJsonObject(Locer401ApplicationJson locer401ApplicationJSONObject) {
        this.locer401ApplicationJSONObject = locer401ApplicationJSONObject;
        return this;
    }
    public Locer404ApplicationJson locer404ApplicationJSONObject;
    public LocerResponse withLocer404ApplicationJsonObject(Locer404ApplicationJson locer404ApplicationJSONObject) {
        this.locer404ApplicationJSONObject = locer404ApplicationJSONObject;
        return this;
    }
    public Locer500ApplicationJson locer500ApplicationJSONObject;
    public LocerResponse withLocer500ApplicationJsonObject(Locer500ApplicationJson locer500ApplicationJSONObject) {
        this.locer500ApplicationJSONObject = locer500ApplicationJSONObject;
        return this;
    }
    public Locer502ApplicationJson locer502ApplicationJSONObject;
    public LocerResponse withLocer502ApplicationJsonObject(Locer502ApplicationJson locer502ApplicationJSONObject) {
        this.locer502ApplicationJSONObject = locer502ApplicationJSONObject;
        return this;
    }
    public Locer503ApplicationJson locer503ApplicationJSONObject;
    public LocerResponse withLocer503ApplicationJsonObject(Locer503ApplicationJson locer503ApplicationJSONObject) {
        this.locer503ApplicationJSONObject = locer503ApplicationJSONObject;
        return this;
    }
    public Locer504ApplicationJson locer504ApplicationJSONObject;
    public LocerResponse withLocer504ApplicationJsonObject(Locer504ApplicationJson locer504ApplicationJSONObject) {
        this.locer504ApplicationJSONObject = locer504ApplicationJSONObject;
        return this;
    }
}