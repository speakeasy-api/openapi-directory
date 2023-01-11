package openapisdk.models.operations;



public class PecerResponse {
    public String contentType;
    public PecerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PecerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Pecer400ApplicationJson pecer400ApplicationJSONObject;
    public PecerResponse withPecer400ApplicationJsonObject(Pecer400ApplicationJson pecer400ApplicationJSONObject) {
        this.pecer400ApplicationJSONObject = pecer400ApplicationJSONObject;
        return this;
    }
    public Pecer401ApplicationJson pecer401ApplicationJSONObject;
    public PecerResponse withPecer401ApplicationJsonObject(Pecer401ApplicationJson pecer401ApplicationJSONObject) {
        this.pecer401ApplicationJSONObject = pecer401ApplicationJSONObject;
        return this;
    }
    public Pecer404ApplicationJson pecer404ApplicationJSONObject;
    public PecerResponse withPecer404ApplicationJsonObject(Pecer404ApplicationJson pecer404ApplicationJSONObject) {
        this.pecer404ApplicationJSONObject = pecer404ApplicationJSONObject;
        return this;
    }
    public Pecer500ApplicationJson pecer500ApplicationJSONObject;
    public PecerResponse withPecer500ApplicationJsonObject(Pecer500ApplicationJson pecer500ApplicationJSONObject) {
        this.pecer500ApplicationJSONObject = pecer500ApplicationJSONObject;
        return this;
    }
    public Pecer502ApplicationJson pecer502ApplicationJSONObject;
    public PecerResponse withPecer502ApplicationJsonObject(Pecer502ApplicationJson pecer502ApplicationJSONObject) {
        this.pecer502ApplicationJSONObject = pecer502ApplicationJSONObject;
        return this;
    }
    public Pecer503ApplicationJson pecer503ApplicationJSONObject;
    public PecerResponse withPecer503ApplicationJsonObject(Pecer503ApplicationJson pecer503ApplicationJSONObject) {
        this.pecer503ApplicationJSONObject = pecer503ApplicationJSONObject;
        return this;
    }
    public Pecer504ApplicationJson pecer504ApplicationJSONObject;
    public PecerResponse withPecer504ApplicationJsonObject(Pecer504ApplicationJson pecer504ApplicationJSONObject) {
        this.pecer504ApplicationJSONObject = pecer504ApplicationJSONObject;
        return this;
    }
}