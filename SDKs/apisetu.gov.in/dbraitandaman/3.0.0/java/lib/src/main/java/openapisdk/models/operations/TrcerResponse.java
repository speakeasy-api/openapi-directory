package openapisdk.models.operations;



public class TrcerResponse {
    public String contentType;
    public TrcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TrcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Trcer400ApplicationJson trcer400ApplicationJSONObject;
    public TrcerResponse withTrcer400ApplicationJsonObject(Trcer400ApplicationJson trcer400ApplicationJSONObject) {
        this.trcer400ApplicationJSONObject = trcer400ApplicationJSONObject;
        return this;
    }
    public Trcer401ApplicationJson trcer401ApplicationJSONObject;
    public TrcerResponse withTrcer401ApplicationJsonObject(Trcer401ApplicationJson trcer401ApplicationJSONObject) {
        this.trcer401ApplicationJSONObject = trcer401ApplicationJSONObject;
        return this;
    }
    public Trcer404ApplicationJson trcer404ApplicationJSONObject;
    public TrcerResponse withTrcer404ApplicationJsonObject(Trcer404ApplicationJson trcer404ApplicationJSONObject) {
        this.trcer404ApplicationJSONObject = trcer404ApplicationJSONObject;
        return this;
    }
    public Trcer500ApplicationJson trcer500ApplicationJSONObject;
    public TrcerResponse withTrcer500ApplicationJsonObject(Trcer500ApplicationJson trcer500ApplicationJSONObject) {
        this.trcer500ApplicationJSONObject = trcer500ApplicationJSONObject;
        return this;
    }
    public Trcer502ApplicationJson trcer502ApplicationJSONObject;
    public TrcerResponse withTrcer502ApplicationJsonObject(Trcer502ApplicationJson trcer502ApplicationJSONObject) {
        this.trcer502ApplicationJSONObject = trcer502ApplicationJSONObject;
        return this;
    }
    public Trcer503ApplicationJson trcer503ApplicationJSONObject;
    public TrcerResponse withTrcer503ApplicationJsonObject(Trcer503ApplicationJson trcer503ApplicationJSONObject) {
        this.trcer503ApplicationJSONObject = trcer503ApplicationJSONObject;
        return this;
    }
    public Trcer504ApplicationJson trcer504ApplicationJSONObject;
    public TrcerResponse withTrcer504ApplicationJsonObject(Trcer504ApplicationJson trcer504ApplicationJSONObject) {
        this.trcer504ApplicationJSONObject = trcer504ApplicationJSONObject;
        return this;
    }
}