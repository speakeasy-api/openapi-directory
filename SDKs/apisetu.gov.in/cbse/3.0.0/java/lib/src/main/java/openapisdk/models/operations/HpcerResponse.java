package openapisdk.models.operations;



public class HpcerResponse {
    public String contentType;
    public HpcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HpcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Hpcer400ApplicationJson hpcer400ApplicationJSONObject;
    public HpcerResponse withHpcer400ApplicationJsonObject(Hpcer400ApplicationJson hpcer400ApplicationJSONObject) {
        this.hpcer400ApplicationJSONObject = hpcer400ApplicationJSONObject;
        return this;
    }
    public Hpcer401ApplicationJson hpcer401ApplicationJSONObject;
    public HpcerResponse withHpcer401ApplicationJsonObject(Hpcer401ApplicationJson hpcer401ApplicationJSONObject) {
        this.hpcer401ApplicationJSONObject = hpcer401ApplicationJSONObject;
        return this;
    }
    public Hpcer404ApplicationJson hpcer404ApplicationJSONObject;
    public HpcerResponse withHpcer404ApplicationJsonObject(Hpcer404ApplicationJson hpcer404ApplicationJSONObject) {
        this.hpcer404ApplicationJSONObject = hpcer404ApplicationJSONObject;
        return this;
    }
    public Hpcer500ApplicationJson hpcer500ApplicationJSONObject;
    public HpcerResponse withHpcer500ApplicationJsonObject(Hpcer500ApplicationJson hpcer500ApplicationJSONObject) {
        this.hpcer500ApplicationJSONObject = hpcer500ApplicationJSONObject;
        return this;
    }
    public Hpcer502ApplicationJson hpcer502ApplicationJSONObject;
    public HpcerResponse withHpcer502ApplicationJsonObject(Hpcer502ApplicationJson hpcer502ApplicationJSONObject) {
        this.hpcer502ApplicationJSONObject = hpcer502ApplicationJSONObject;
        return this;
    }
    public Hpcer503ApplicationJson hpcer503ApplicationJSONObject;
    public HpcerResponse withHpcer503ApplicationJsonObject(Hpcer503ApplicationJson hpcer503ApplicationJSONObject) {
        this.hpcer503ApplicationJSONObject = hpcer503ApplicationJSONObject;
        return this;
    }
    public Hpcer504ApplicationJson hpcer504ApplicationJSONObject;
    public HpcerResponse withHpcer504ApplicationJsonObject(Hpcer504ApplicationJson hpcer504ApplicationJSONObject) {
        this.hpcer504ApplicationJSONObject = hpcer504ApplicationJSONObject;
        return this;
    }
}