package openapisdk.models.operations;



public class CocerResponse {
    public String contentType;
    public CocerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CocerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Cocer400ApplicationJson cocer400ApplicationJSONObject;
    public CocerResponse withCocer400ApplicationJsonObject(Cocer400ApplicationJson cocer400ApplicationJSONObject) {
        this.cocer400ApplicationJSONObject = cocer400ApplicationJSONObject;
        return this;
    }
    public Cocer401ApplicationJson cocer401ApplicationJSONObject;
    public CocerResponse withCocer401ApplicationJsonObject(Cocer401ApplicationJson cocer401ApplicationJSONObject) {
        this.cocer401ApplicationJSONObject = cocer401ApplicationJSONObject;
        return this;
    }
    public Cocer404ApplicationJson cocer404ApplicationJSONObject;
    public CocerResponse withCocer404ApplicationJsonObject(Cocer404ApplicationJson cocer404ApplicationJSONObject) {
        this.cocer404ApplicationJSONObject = cocer404ApplicationJSONObject;
        return this;
    }
    public Cocer500ApplicationJson cocer500ApplicationJSONObject;
    public CocerResponse withCocer500ApplicationJsonObject(Cocer500ApplicationJson cocer500ApplicationJSONObject) {
        this.cocer500ApplicationJSONObject = cocer500ApplicationJSONObject;
        return this;
    }
    public Cocer502ApplicationJson cocer502ApplicationJSONObject;
    public CocerResponse withCocer502ApplicationJsonObject(Cocer502ApplicationJson cocer502ApplicationJSONObject) {
        this.cocer502ApplicationJSONObject = cocer502ApplicationJSONObject;
        return this;
    }
    public Cocer503ApplicationJson cocer503ApplicationJSONObject;
    public CocerResponse withCocer503ApplicationJsonObject(Cocer503ApplicationJson cocer503ApplicationJSONObject) {
        this.cocer503ApplicationJSONObject = cocer503ApplicationJSONObject;
        return this;
    }
    public Cocer504ApplicationJson cocer504ApplicationJSONObject;
    public CocerResponse withCocer504ApplicationJsonObject(Cocer504ApplicationJson cocer504ApplicationJSONObject) {
        this.cocer504ApplicationJSONObject = cocer504ApplicationJSONObject;
        return this;
    }
}