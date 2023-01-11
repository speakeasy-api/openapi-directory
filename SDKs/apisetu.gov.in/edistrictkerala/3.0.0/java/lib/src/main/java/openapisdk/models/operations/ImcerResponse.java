package openapisdk.models.operations;



public class ImcerResponse {
    public String contentType;
    public ImcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Imcer400ApplicationJson imcer400ApplicationJSONObject;
    public ImcerResponse withImcer400ApplicationJsonObject(Imcer400ApplicationJson imcer400ApplicationJSONObject) {
        this.imcer400ApplicationJSONObject = imcer400ApplicationJSONObject;
        return this;
    }
    public Imcer401ApplicationJson imcer401ApplicationJSONObject;
    public ImcerResponse withImcer401ApplicationJsonObject(Imcer401ApplicationJson imcer401ApplicationJSONObject) {
        this.imcer401ApplicationJSONObject = imcer401ApplicationJSONObject;
        return this;
    }
    public Imcer404ApplicationJson imcer404ApplicationJSONObject;
    public ImcerResponse withImcer404ApplicationJsonObject(Imcer404ApplicationJson imcer404ApplicationJSONObject) {
        this.imcer404ApplicationJSONObject = imcer404ApplicationJSONObject;
        return this;
    }
    public Imcer500ApplicationJson imcer500ApplicationJSONObject;
    public ImcerResponse withImcer500ApplicationJsonObject(Imcer500ApplicationJson imcer500ApplicationJSONObject) {
        this.imcer500ApplicationJSONObject = imcer500ApplicationJSONObject;
        return this;
    }
    public Imcer502ApplicationJson imcer502ApplicationJSONObject;
    public ImcerResponse withImcer502ApplicationJsonObject(Imcer502ApplicationJson imcer502ApplicationJSONObject) {
        this.imcer502ApplicationJSONObject = imcer502ApplicationJSONObject;
        return this;
    }
    public Imcer503ApplicationJson imcer503ApplicationJSONObject;
    public ImcerResponse withImcer503ApplicationJsonObject(Imcer503ApplicationJson imcer503ApplicationJSONObject) {
        this.imcer503ApplicationJSONObject = imcer503ApplicationJSONObject;
        return this;
    }
    public Imcer504ApplicationJson imcer504ApplicationJSONObject;
    public ImcerResponse withImcer504ApplicationJsonObject(Imcer504ApplicationJson imcer504ApplicationJSONObject) {
        this.imcer504ApplicationJSONObject = imcer504ApplicationJSONObject;
        return this;
    }
}