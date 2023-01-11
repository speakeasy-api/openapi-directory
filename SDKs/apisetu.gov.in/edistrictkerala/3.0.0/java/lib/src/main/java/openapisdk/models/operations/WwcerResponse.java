package openapisdk.models.operations;



public class WwcerResponse {
    public String contentType;
    public WwcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WwcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Wwcer400ApplicationJson wwcer400ApplicationJSONObject;
    public WwcerResponse withWwcer400ApplicationJsonObject(Wwcer400ApplicationJson wwcer400ApplicationJSONObject) {
        this.wwcer400ApplicationJSONObject = wwcer400ApplicationJSONObject;
        return this;
    }
    public Wwcer401ApplicationJson wwcer401ApplicationJSONObject;
    public WwcerResponse withWwcer401ApplicationJsonObject(Wwcer401ApplicationJson wwcer401ApplicationJSONObject) {
        this.wwcer401ApplicationJSONObject = wwcer401ApplicationJSONObject;
        return this;
    }
    public Wwcer404ApplicationJson wwcer404ApplicationJSONObject;
    public WwcerResponse withWwcer404ApplicationJsonObject(Wwcer404ApplicationJson wwcer404ApplicationJSONObject) {
        this.wwcer404ApplicationJSONObject = wwcer404ApplicationJSONObject;
        return this;
    }
    public Wwcer500ApplicationJson wwcer500ApplicationJSONObject;
    public WwcerResponse withWwcer500ApplicationJsonObject(Wwcer500ApplicationJson wwcer500ApplicationJSONObject) {
        this.wwcer500ApplicationJSONObject = wwcer500ApplicationJSONObject;
        return this;
    }
    public Wwcer502ApplicationJson wwcer502ApplicationJSONObject;
    public WwcerResponse withWwcer502ApplicationJsonObject(Wwcer502ApplicationJson wwcer502ApplicationJSONObject) {
        this.wwcer502ApplicationJSONObject = wwcer502ApplicationJSONObject;
        return this;
    }
    public Wwcer503ApplicationJson wwcer503ApplicationJSONObject;
    public WwcerResponse withWwcer503ApplicationJsonObject(Wwcer503ApplicationJson wwcer503ApplicationJSONObject) {
        this.wwcer503ApplicationJSONObject = wwcer503ApplicationJSONObject;
        return this;
    }
    public Wwcer504ApplicationJson wwcer504ApplicationJSONObject;
    public WwcerResponse withWwcer504ApplicationJsonObject(Wwcer504ApplicationJson wwcer504ApplicationJSONObject) {
        this.wwcer504ApplicationJSONObject = wwcer504ApplicationJSONObject;
        return this;
    }
}