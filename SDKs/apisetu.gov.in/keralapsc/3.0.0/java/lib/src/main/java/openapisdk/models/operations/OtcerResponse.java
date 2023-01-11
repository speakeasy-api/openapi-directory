package openapisdk.models.operations;



public class OtcerResponse {
    public String contentType;
    public OtcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OtcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Otcer400ApplicationJson otcer400ApplicationJSONObject;
    public OtcerResponse withOtcer400ApplicationJsonObject(Otcer400ApplicationJson otcer400ApplicationJSONObject) {
        this.otcer400ApplicationJSONObject = otcer400ApplicationJSONObject;
        return this;
    }
    public Otcer401ApplicationJson otcer401ApplicationJSONObject;
    public OtcerResponse withOtcer401ApplicationJsonObject(Otcer401ApplicationJson otcer401ApplicationJSONObject) {
        this.otcer401ApplicationJSONObject = otcer401ApplicationJSONObject;
        return this;
    }
    public Otcer404ApplicationJson otcer404ApplicationJSONObject;
    public OtcerResponse withOtcer404ApplicationJsonObject(Otcer404ApplicationJson otcer404ApplicationJSONObject) {
        this.otcer404ApplicationJSONObject = otcer404ApplicationJSONObject;
        return this;
    }
    public Otcer500ApplicationJson otcer500ApplicationJSONObject;
    public OtcerResponse withOtcer500ApplicationJsonObject(Otcer500ApplicationJson otcer500ApplicationJSONObject) {
        this.otcer500ApplicationJSONObject = otcer500ApplicationJSONObject;
        return this;
    }
    public Otcer502ApplicationJson otcer502ApplicationJSONObject;
    public OtcerResponse withOtcer502ApplicationJsonObject(Otcer502ApplicationJson otcer502ApplicationJSONObject) {
        this.otcer502ApplicationJSONObject = otcer502ApplicationJSONObject;
        return this;
    }
    public Otcer503ApplicationJson otcer503ApplicationJSONObject;
    public OtcerResponse withOtcer503ApplicationJsonObject(Otcer503ApplicationJson otcer503ApplicationJSONObject) {
        this.otcer503ApplicationJSONObject = otcer503ApplicationJSONObject;
        return this;
    }
    public Otcer504ApplicationJson otcer504ApplicationJSONObject;
    public OtcerResponse withOtcer504ApplicationJsonObject(Otcer504ApplicationJson otcer504ApplicationJSONObject) {
        this.otcer504ApplicationJSONObject = otcer504ApplicationJSONObject;
        return this;
    }
}