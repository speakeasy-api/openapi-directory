package openapisdk.models.operations;



public class CecerResponse {
    public String contentType;
    public CecerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CecerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Cecer400ApplicationJson cecer400ApplicationJSONObject;
    public CecerResponse withCecer400ApplicationJsonObject(Cecer400ApplicationJson cecer400ApplicationJSONObject) {
        this.cecer400ApplicationJSONObject = cecer400ApplicationJSONObject;
        return this;
    }
    public Cecer401ApplicationJson cecer401ApplicationJSONObject;
    public CecerResponse withCecer401ApplicationJsonObject(Cecer401ApplicationJson cecer401ApplicationJSONObject) {
        this.cecer401ApplicationJSONObject = cecer401ApplicationJSONObject;
        return this;
    }
    public Cecer404ApplicationJson cecer404ApplicationJSONObject;
    public CecerResponse withCecer404ApplicationJsonObject(Cecer404ApplicationJson cecer404ApplicationJSONObject) {
        this.cecer404ApplicationJSONObject = cecer404ApplicationJSONObject;
        return this;
    }
    public Cecer500ApplicationJson cecer500ApplicationJSONObject;
    public CecerResponse withCecer500ApplicationJsonObject(Cecer500ApplicationJson cecer500ApplicationJSONObject) {
        this.cecer500ApplicationJSONObject = cecer500ApplicationJSONObject;
        return this;
    }
    public Cecer502ApplicationJson cecer502ApplicationJSONObject;
    public CecerResponse withCecer502ApplicationJsonObject(Cecer502ApplicationJson cecer502ApplicationJSONObject) {
        this.cecer502ApplicationJSONObject = cecer502ApplicationJSONObject;
        return this;
    }
    public Cecer503ApplicationJson cecer503ApplicationJSONObject;
    public CecerResponse withCecer503ApplicationJsonObject(Cecer503ApplicationJson cecer503ApplicationJSONObject) {
        this.cecer503ApplicationJSONObject = cecer503ApplicationJSONObject;
        return this;
    }
    public Cecer504ApplicationJson cecer504ApplicationJSONObject;
    public CecerResponse withCecer504ApplicationJsonObject(Cecer504ApplicationJson cecer504ApplicationJSONObject) {
        this.cecer504ApplicationJSONObject = cecer504ApplicationJSONObject;
        return this;
    }
}