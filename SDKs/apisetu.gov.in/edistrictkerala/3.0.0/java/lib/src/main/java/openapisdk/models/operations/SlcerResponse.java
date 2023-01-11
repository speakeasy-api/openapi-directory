package openapisdk.models.operations;



public class SlcerResponse {
    public String contentType;
    public SlcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SlcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Slcer400ApplicationJson slcer400ApplicationJSONObject;
    public SlcerResponse withSlcer400ApplicationJsonObject(Slcer400ApplicationJson slcer400ApplicationJSONObject) {
        this.slcer400ApplicationJSONObject = slcer400ApplicationJSONObject;
        return this;
    }
    public Slcer401ApplicationJson slcer401ApplicationJSONObject;
    public SlcerResponse withSlcer401ApplicationJsonObject(Slcer401ApplicationJson slcer401ApplicationJSONObject) {
        this.slcer401ApplicationJSONObject = slcer401ApplicationJSONObject;
        return this;
    }
    public Slcer404ApplicationJson slcer404ApplicationJSONObject;
    public SlcerResponse withSlcer404ApplicationJsonObject(Slcer404ApplicationJson slcer404ApplicationJSONObject) {
        this.slcer404ApplicationJSONObject = slcer404ApplicationJSONObject;
        return this;
    }
    public Slcer500ApplicationJson slcer500ApplicationJSONObject;
    public SlcerResponse withSlcer500ApplicationJsonObject(Slcer500ApplicationJson slcer500ApplicationJSONObject) {
        this.slcer500ApplicationJSONObject = slcer500ApplicationJSONObject;
        return this;
    }
    public Slcer502ApplicationJson slcer502ApplicationJSONObject;
    public SlcerResponse withSlcer502ApplicationJsonObject(Slcer502ApplicationJson slcer502ApplicationJSONObject) {
        this.slcer502ApplicationJSONObject = slcer502ApplicationJSONObject;
        return this;
    }
    public Slcer503ApplicationJson slcer503ApplicationJSONObject;
    public SlcerResponse withSlcer503ApplicationJsonObject(Slcer503ApplicationJson slcer503ApplicationJSONObject) {
        this.slcer503ApplicationJSONObject = slcer503ApplicationJSONObject;
        return this;
    }
    public Slcer504ApplicationJson slcer504ApplicationJSONObject;
    public SlcerResponse withSlcer504ApplicationJsonObject(Slcer504ApplicationJson slcer504ApplicationJSONObject) {
        this.slcer504ApplicationJSONObject = slcer504ApplicationJSONObject;
        return this;
    }
}