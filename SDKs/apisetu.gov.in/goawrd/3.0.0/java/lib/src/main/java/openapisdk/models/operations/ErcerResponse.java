package openapisdk.models.operations;



public class ErcerResponse {
    public String contentType;
    public ErcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ErcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Ercer400ApplicationJson ercer400ApplicationJSONObject;
    public ErcerResponse withErcer400ApplicationJsonObject(Ercer400ApplicationJson ercer400ApplicationJSONObject) {
        this.ercer400ApplicationJSONObject = ercer400ApplicationJSONObject;
        return this;
    }
    public Ercer401ApplicationJson ercer401ApplicationJSONObject;
    public ErcerResponse withErcer401ApplicationJsonObject(Ercer401ApplicationJson ercer401ApplicationJSONObject) {
        this.ercer401ApplicationJSONObject = ercer401ApplicationJSONObject;
        return this;
    }
    public Ercer404ApplicationJson ercer404ApplicationJSONObject;
    public ErcerResponse withErcer404ApplicationJsonObject(Ercer404ApplicationJson ercer404ApplicationJSONObject) {
        this.ercer404ApplicationJSONObject = ercer404ApplicationJSONObject;
        return this;
    }
    public Ercer500ApplicationJson ercer500ApplicationJSONObject;
    public ErcerResponse withErcer500ApplicationJsonObject(Ercer500ApplicationJson ercer500ApplicationJSONObject) {
        this.ercer500ApplicationJSONObject = ercer500ApplicationJSONObject;
        return this;
    }
    public Ercer502ApplicationJson ercer502ApplicationJSONObject;
    public ErcerResponse withErcer502ApplicationJsonObject(Ercer502ApplicationJson ercer502ApplicationJSONObject) {
        this.ercer502ApplicationJSONObject = ercer502ApplicationJSONObject;
        return this;
    }
    public Ercer503ApplicationJson ercer503ApplicationJSONObject;
    public ErcerResponse withErcer503ApplicationJsonObject(Ercer503ApplicationJson ercer503ApplicationJSONObject) {
        this.ercer503ApplicationJSONObject = ercer503ApplicationJSONObject;
        return this;
    }
    public Ercer504ApplicationJson ercer504ApplicationJSONObject;
    public ErcerResponse withErcer504ApplicationJsonObject(Ercer504ApplicationJson ercer504ApplicationJSONObject) {
        this.ercer504ApplicationJSONObject = ercer504ApplicationJSONObject;
        return this;
    }
}