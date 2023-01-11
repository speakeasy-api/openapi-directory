package openapisdk.models.operations;



public class ChcerResponse {
    public String contentType;
    public ChcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Chcer400ApplicationJson chcer400ApplicationJSONObject;
    public ChcerResponse withChcer400ApplicationJsonObject(Chcer400ApplicationJson chcer400ApplicationJSONObject) {
        this.chcer400ApplicationJSONObject = chcer400ApplicationJSONObject;
        return this;
    }
    public Chcer401ApplicationJson chcer401ApplicationJSONObject;
    public ChcerResponse withChcer401ApplicationJsonObject(Chcer401ApplicationJson chcer401ApplicationJSONObject) {
        this.chcer401ApplicationJSONObject = chcer401ApplicationJSONObject;
        return this;
    }
    public Chcer404ApplicationJson chcer404ApplicationJSONObject;
    public ChcerResponse withChcer404ApplicationJsonObject(Chcer404ApplicationJson chcer404ApplicationJSONObject) {
        this.chcer404ApplicationJSONObject = chcer404ApplicationJSONObject;
        return this;
    }
    public Chcer500ApplicationJson chcer500ApplicationJSONObject;
    public ChcerResponse withChcer500ApplicationJsonObject(Chcer500ApplicationJson chcer500ApplicationJSONObject) {
        this.chcer500ApplicationJSONObject = chcer500ApplicationJSONObject;
        return this;
    }
    public Chcer502ApplicationJson chcer502ApplicationJSONObject;
    public ChcerResponse withChcer502ApplicationJsonObject(Chcer502ApplicationJson chcer502ApplicationJSONObject) {
        this.chcer502ApplicationJSONObject = chcer502ApplicationJSONObject;
        return this;
    }
    public Chcer503ApplicationJson chcer503ApplicationJSONObject;
    public ChcerResponse withChcer503ApplicationJsonObject(Chcer503ApplicationJson chcer503ApplicationJSONObject) {
        this.chcer503ApplicationJSONObject = chcer503ApplicationJSONObject;
        return this;
    }
    public Chcer504ApplicationJson chcer504ApplicationJSONObject;
    public ChcerResponse withChcer504ApplicationJsonObject(Chcer504ApplicationJson chcer504ApplicationJSONObject) {
        this.chcer504ApplicationJSONObject = chcer504ApplicationJSONObject;
        return this;
    }
}