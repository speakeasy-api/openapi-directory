package openapisdk.models.operations;



public class SkcerResponse {
    public String contentType;
    public SkcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SkcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Skcer400ApplicationJson skcer400ApplicationJSONObject;
    public SkcerResponse withSkcer400ApplicationJsonObject(Skcer400ApplicationJson skcer400ApplicationJSONObject) {
        this.skcer400ApplicationJSONObject = skcer400ApplicationJSONObject;
        return this;
    }
    public Skcer401ApplicationJson skcer401ApplicationJSONObject;
    public SkcerResponse withSkcer401ApplicationJsonObject(Skcer401ApplicationJson skcer401ApplicationJSONObject) {
        this.skcer401ApplicationJSONObject = skcer401ApplicationJSONObject;
        return this;
    }
    public Skcer404ApplicationJson skcer404ApplicationJSONObject;
    public SkcerResponse withSkcer404ApplicationJsonObject(Skcer404ApplicationJson skcer404ApplicationJSONObject) {
        this.skcer404ApplicationJSONObject = skcer404ApplicationJSONObject;
        return this;
    }
    public Skcer500ApplicationJson skcer500ApplicationJSONObject;
    public SkcerResponse withSkcer500ApplicationJsonObject(Skcer500ApplicationJson skcer500ApplicationJSONObject) {
        this.skcer500ApplicationJSONObject = skcer500ApplicationJSONObject;
        return this;
    }
    public Skcer502ApplicationJson skcer502ApplicationJSONObject;
    public SkcerResponse withSkcer502ApplicationJsonObject(Skcer502ApplicationJson skcer502ApplicationJSONObject) {
        this.skcer502ApplicationJSONObject = skcer502ApplicationJSONObject;
        return this;
    }
    public Skcer503ApplicationJson skcer503ApplicationJSONObject;
    public SkcerResponse withSkcer503ApplicationJsonObject(Skcer503ApplicationJson skcer503ApplicationJSONObject) {
        this.skcer503ApplicationJSONObject = skcer503ApplicationJSONObject;
        return this;
    }
    public Skcer504ApplicationJson skcer504ApplicationJSONObject;
    public SkcerResponse withSkcer504ApplicationJsonObject(Skcer504ApplicationJson skcer504ApplicationJSONObject) {
        this.skcer504ApplicationJSONObject = skcer504ApplicationJSONObject;
        return this;
    }
}