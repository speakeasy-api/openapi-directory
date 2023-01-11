package openapisdk.models.operations;



public class PncerResponse {
    public String contentType;
    public PncerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PncerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Pncer400ApplicationJson pncer400ApplicationJSONObject;
    public PncerResponse withPncer400ApplicationJsonObject(Pncer400ApplicationJson pncer400ApplicationJSONObject) {
        this.pncer400ApplicationJSONObject = pncer400ApplicationJSONObject;
        return this;
    }
    public Pncer401ApplicationJson pncer401ApplicationJSONObject;
    public PncerResponse withPncer401ApplicationJsonObject(Pncer401ApplicationJson pncer401ApplicationJSONObject) {
        this.pncer401ApplicationJSONObject = pncer401ApplicationJSONObject;
        return this;
    }
    public Pncer404ApplicationJson pncer404ApplicationJSONObject;
    public PncerResponse withPncer404ApplicationJsonObject(Pncer404ApplicationJson pncer404ApplicationJSONObject) {
        this.pncer404ApplicationJSONObject = pncer404ApplicationJSONObject;
        return this;
    }
    public Pncer500ApplicationJson pncer500ApplicationJSONObject;
    public PncerResponse withPncer500ApplicationJsonObject(Pncer500ApplicationJson pncer500ApplicationJSONObject) {
        this.pncer500ApplicationJSONObject = pncer500ApplicationJSONObject;
        return this;
    }
    public Pncer502ApplicationJson pncer502ApplicationJSONObject;
    public PncerResponse withPncer502ApplicationJsonObject(Pncer502ApplicationJson pncer502ApplicationJSONObject) {
        this.pncer502ApplicationJSONObject = pncer502ApplicationJSONObject;
        return this;
    }
    public Pncer503ApplicationJson pncer503ApplicationJSONObject;
    public PncerResponse withPncer503ApplicationJsonObject(Pncer503ApplicationJson pncer503ApplicationJSONObject) {
        this.pncer503ApplicationJSONObject = pncer503ApplicationJSONObject;
        return this;
    }
    public Pncer504ApplicationJson pncer504ApplicationJSONObject;
    public PncerResponse withPncer504ApplicationJsonObject(Pncer504ApplicationJson pncer504ApplicationJSONObject) {
        this.pncer504ApplicationJSONObject = pncer504ApplicationJSONObject;
        return this;
    }
}