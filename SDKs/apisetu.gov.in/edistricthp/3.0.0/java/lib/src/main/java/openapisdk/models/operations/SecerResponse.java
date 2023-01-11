package openapisdk.models.operations;



public class SecerResponse {
    public String contentType;
    public SecerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SecerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Secer400ApplicationJson secer400ApplicationJSONObject;
    public SecerResponse withSecer400ApplicationJsonObject(Secer400ApplicationJson secer400ApplicationJSONObject) {
        this.secer400ApplicationJSONObject = secer400ApplicationJSONObject;
        return this;
    }
    public Secer401ApplicationJson secer401ApplicationJSONObject;
    public SecerResponse withSecer401ApplicationJsonObject(Secer401ApplicationJson secer401ApplicationJSONObject) {
        this.secer401ApplicationJSONObject = secer401ApplicationJSONObject;
        return this;
    }
    public Secer404ApplicationJson secer404ApplicationJSONObject;
    public SecerResponse withSecer404ApplicationJsonObject(Secer404ApplicationJson secer404ApplicationJSONObject) {
        this.secer404ApplicationJSONObject = secer404ApplicationJSONObject;
        return this;
    }
    public Secer500ApplicationJson secer500ApplicationJSONObject;
    public SecerResponse withSecer500ApplicationJsonObject(Secer500ApplicationJson secer500ApplicationJSONObject) {
        this.secer500ApplicationJSONObject = secer500ApplicationJSONObject;
        return this;
    }
    public Secer502ApplicationJson secer502ApplicationJSONObject;
    public SecerResponse withSecer502ApplicationJsonObject(Secer502ApplicationJson secer502ApplicationJSONObject) {
        this.secer502ApplicationJSONObject = secer502ApplicationJSONObject;
        return this;
    }
    public Secer503ApplicationJson secer503ApplicationJSONObject;
    public SecerResponse withSecer503ApplicationJsonObject(Secer503ApplicationJson secer503ApplicationJSONObject) {
        this.secer503ApplicationJSONObject = secer503ApplicationJSONObject;
        return this;
    }
    public Secer504ApplicationJson secer504ApplicationJSONObject;
    public SecerResponse withSecer504ApplicationJsonObject(Secer504ApplicationJson secer504ApplicationJSONObject) {
        this.secer504ApplicationJSONObject = secer504ApplicationJSONObject;
        return this;
    }
}