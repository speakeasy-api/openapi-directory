package openapisdk.models.operations;



public class CtcerResponse {
    public String contentType;
    public CtcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CtcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Ctcer400ApplicationJson ctcer400ApplicationJSONObject;
    public CtcerResponse withCtcer400ApplicationJsonObject(Ctcer400ApplicationJson ctcer400ApplicationJSONObject) {
        this.ctcer400ApplicationJSONObject = ctcer400ApplicationJSONObject;
        return this;
    }
    public Ctcer401ApplicationJson ctcer401ApplicationJSONObject;
    public CtcerResponse withCtcer401ApplicationJsonObject(Ctcer401ApplicationJson ctcer401ApplicationJSONObject) {
        this.ctcer401ApplicationJSONObject = ctcer401ApplicationJSONObject;
        return this;
    }
    public Ctcer404ApplicationJson ctcer404ApplicationJSONObject;
    public CtcerResponse withCtcer404ApplicationJsonObject(Ctcer404ApplicationJson ctcer404ApplicationJSONObject) {
        this.ctcer404ApplicationJSONObject = ctcer404ApplicationJSONObject;
        return this;
    }
    public Ctcer500ApplicationJson ctcer500ApplicationJSONObject;
    public CtcerResponse withCtcer500ApplicationJsonObject(Ctcer500ApplicationJson ctcer500ApplicationJSONObject) {
        this.ctcer500ApplicationJSONObject = ctcer500ApplicationJSONObject;
        return this;
    }
    public Ctcer502ApplicationJson ctcer502ApplicationJSONObject;
    public CtcerResponse withCtcer502ApplicationJsonObject(Ctcer502ApplicationJson ctcer502ApplicationJSONObject) {
        this.ctcer502ApplicationJSONObject = ctcer502ApplicationJSONObject;
        return this;
    }
    public Ctcer503ApplicationJson ctcer503ApplicationJSONObject;
    public CtcerResponse withCtcer503ApplicationJsonObject(Ctcer503ApplicationJson ctcer503ApplicationJSONObject) {
        this.ctcer503ApplicationJSONObject = ctcer503ApplicationJSONObject;
        return this;
    }
    public Ctcer504ApplicationJson ctcer504ApplicationJSONObject;
    public CtcerResponse withCtcer504ApplicationJsonObject(Ctcer504ApplicationJson ctcer504ApplicationJSONObject) {
        this.ctcer504ApplicationJSONObject = ctcer504ApplicationJSONObject;
        return this;
    }
}