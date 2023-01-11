package openapisdk.models.operations;



public class BhcerResponse {
    public String contentType;
    public BhcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BhcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Bhcer400ApplicationJson bhcer400ApplicationJSONObject;
    public BhcerResponse withBhcer400ApplicationJsonObject(Bhcer400ApplicationJson bhcer400ApplicationJSONObject) {
        this.bhcer400ApplicationJSONObject = bhcer400ApplicationJSONObject;
        return this;
    }
    public Bhcer401ApplicationJson bhcer401ApplicationJSONObject;
    public BhcerResponse withBhcer401ApplicationJsonObject(Bhcer401ApplicationJson bhcer401ApplicationJSONObject) {
        this.bhcer401ApplicationJSONObject = bhcer401ApplicationJSONObject;
        return this;
    }
    public Bhcer404ApplicationJson bhcer404ApplicationJSONObject;
    public BhcerResponse withBhcer404ApplicationJsonObject(Bhcer404ApplicationJson bhcer404ApplicationJSONObject) {
        this.bhcer404ApplicationJSONObject = bhcer404ApplicationJSONObject;
        return this;
    }
    public Bhcer500ApplicationJson bhcer500ApplicationJSONObject;
    public BhcerResponse withBhcer500ApplicationJsonObject(Bhcer500ApplicationJson bhcer500ApplicationJSONObject) {
        this.bhcer500ApplicationJSONObject = bhcer500ApplicationJSONObject;
        return this;
    }
    public Bhcer502ApplicationJson bhcer502ApplicationJSONObject;
    public BhcerResponse withBhcer502ApplicationJsonObject(Bhcer502ApplicationJson bhcer502ApplicationJSONObject) {
        this.bhcer502ApplicationJSONObject = bhcer502ApplicationJSONObject;
        return this;
    }
    public Bhcer503ApplicationJson bhcer503ApplicationJSONObject;
    public BhcerResponse withBhcer503ApplicationJsonObject(Bhcer503ApplicationJson bhcer503ApplicationJSONObject) {
        this.bhcer503ApplicationJSONObject = bhcer503ApplicationJSONObject;
        return this;
    }
    public Bhcer504ApplicationJson bhcer504ApplicationJSONObject;
    public BhcerResponse withBhcer504ApplicationJsonObject(Bhcer504ApplicationJson bhcer504ApplicationJSONObject) {
        this.bhcer504ApplicationJSONObject = bhcer504ApplicationJSONObject;
        return this;
    }
}