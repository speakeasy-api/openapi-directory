package openapisdk.models.operations;



public class ShcerResponse {
    public String contentType;
    public ShcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ShcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Shcer400ApplicationJson shcer400ApplicationJSONObject;
    public ShcerResponse withShcer400ApplicationJsonObject(Shcer400ApplicationJson shcer400ApplicationJSONObject) {
        this.shcer400ApplicationJSONObject = shcer400ApplicationJSONObject;
        return this;
    }
    public Shcer401ApplicationJson shcer401ApplicationJSONObject;
    public ShcerResponse withShcer401ApplicationJsonObject(Shcer401ApplicationJson shcer401ApplicationJSONObject) {
        this.shcer401ApplicationJSONObject = shcer401ApplicationJSONObject;
        return this;
    }
    public Shcer404ApplicationJson shcer404ApplicationJSONObject;
    public ShcerResponse withShcer404ApplicationJsonObject(Shcer404ApplicationJson shcer404ApplicationJSONObject) {
        this.shcer404ApplicationJSONObject = shcer404ApplicationJSONObject;
        return this;
    }
    public Shcer500ApplicationJson shcer500ApplicationJSONObject;
    public ShcerResponse withShcer500ApplicationJsonObject(Shcer500ApplicationJson shcer500ApplicationJSONObject) {
        this.shcer500ApplicationJSONObject = shcer500ApplicationJSONObject;
        return this;
    }
    public Shcer502ApplicationJson shcer502ApplicationJSONObject;
    public ShcerResponse withShcer502ApplicationJsonObject(Shcer502ApplicationJson shcer502ApplicationJSONObject) {
        this.shcer502ApplicationJSONObject = shcer502ApplicationJSONObject;
        return this;
    }
    public Shcer503ApplicationJson shcer503ApplicationJSONObject;
    public ShcerResponse withShcer503ApplicationJsonObject(Shcer503ApplicationJson shcer503ApplicationJSONObject) {
        this.shcer503ApplicationJSONObject = shcer503ApplicationJSONObject;
        return this;
    }
    public Shcer504ApplicationJson shcer504ApplicationJSONObject;
    public ShcerResponse withShcer504ApplicationJsonObject(Shcer504ApplicationJson shcer504ApplicationJSONObject) {
        this.shcer504ApplicationJSONObject = shcer504ApplicationJSONObject;
        return this;
    }
}