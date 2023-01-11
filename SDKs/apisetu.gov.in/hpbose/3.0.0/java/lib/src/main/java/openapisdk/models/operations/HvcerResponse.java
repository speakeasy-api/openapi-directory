package openapisdk.models.operations;



public class HvcerResponse {
    public String contentType;
    public HvcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HvcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Hvcer400ApplicationJson hvcer400ApplicationJSONObject;
    public HvcerResponse withHvcer400ApplicationJsonObject(Hvcer400ApplicationJson hvcer400ApplicationJSONObject) {
        this.hvcer400ApplicationJSONObject = hvcer400ApplicationJSONObject;
        return this;
    }
    public Hvcer401ApplicationJson hvcer401ApplicationJSONObject;
    public HvcerResponse withHvcer401ApplicationJsonObject(Hvcer401ApplicationJson hvcer401ApplicationJSONObject) {
        this.hvcer401ApplicationJSONObject = hvcer401ApplicationJSONObject;
        return this;
    }
    public Hvcer404ApplicationJson hvcer404ApplicationJSONObject;
    public HvcerResponse withHvcer404ApplicationJsonObject(Hvcer404ApplicationJson hvcer404ApplicationJSONObject) {
        this.hvcer404ApplicationJSONObject = hvcer404ApplicationJSONObject;
        return this;
    }
    public Hvcer500ApplicationJson hvcer500ApplicationJSONObject;
    public HvcerResponse withHvcer500ApplicationJsonObject(Hvcer500ApplicationJson hvcer500ApplicationJSONObject) {
        this.hvcer500ApplicationJSONObject = hvcer500ApplicationJSONObject;
        return this;
    }
    public Hvcer502ApplicationJson hvcer502ApplicationJSONObject;
    public HvcerResponse withHvcer502ApplicationJsonObject(Hvcer502ApplicationJson hvcer502ApplicationJSONObject) {
        this.hvcer502ApplicationJSONObject = hvcer502ApplicationJSONObject;
        return this;
    }
    public Hvcer503ApplicationJson hvcer503ApplicationJSONObject;
    public HvcerResponse withHvcer503ApplicationJsonObject(Hvcer503ApplicationJson hvcer503ApplicationJSONObject) {
        this.hvcer503ApplicationJSONObject = hvcer503ApplicationJSONObject;
        return this;
    }
    public Hvcer504ApplicationJson hvcer504ApplicationJSONObject;
    public HvcerResponse withHvcer504ApplicationJsonObject(Hvcer504ApplicationJson hvcer504ApplicationJSONObject) {
        this.hvcer504ApplicationJSONObject = hvcer504ApplicationJSONObject;
        return this;
    }
}