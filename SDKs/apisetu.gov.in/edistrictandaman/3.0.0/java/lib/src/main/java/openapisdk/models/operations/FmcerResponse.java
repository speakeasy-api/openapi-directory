package openapisdk.models.operations;



public class FmcerResponse {
    public String contentType;
    public FmcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FmcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Fmcer400ApplicationJson fmcer400ApplicationJSONObject;
    public FmcerResponse withFmcer400ApplicationJsonObject(Fmcer400ApplicationJson fmcer400ApplicationJSONObject) {
        this.fmcer400ApplicationJSONObject = fmcer400ApplicationJSONObject;
        return this;
    }
    public Fmcer401ApplicationJson fmcer401ApplicationJSONObject;
    public FmcerResponse withFmcer401ApplicationJsonObject(Fmcer401ApplicationJson fmcer401ApplicationJSONObject) {
        this.fmcer401ApplicationJSONObject = fmcer401ApplicationJSONObject;
        return this;
    }
    public Fmcer404ApplicationJson fmcer404ApplicationJSONObject;
    public FmcerResponse withFmcer404ApplicationJsonObject(Fmcer404ApplicationJson fmcer404ApplicationJSONObject) {
        this.fmcer404ApplicationJSONObject = fmcer404ApplicationJSONObject;
        return this;
    }
    public Fmcer500ApplicationJson fmcer500ApplicationJSONObject;
    public FmcerResponse withFmcer500ApplicationJsonObject(Fmcer500ApplicationJson fmcer500ApplicationJSONObject) {
        this.fmcer500ApplicationJSONObject = fmcer500ApplicationJSONObject;
        return this;
    }
    public Fmcer502ApplicationJson fmcer502ApplicationJSONObject;
    public FmcerResponse withFmcer502ApplicationJsonObject(Fmcer502ApplicationJson fmcer502ApplicationJSONObject) {
        this.fmcer502ApplicationJSONObject = fmcer502ApplicationJSONObject;
        return this;
    }
    public Fmcer503ApplicationJson fmcer503ApplicationJSONObject;
    public FmcerResponse withFmcer503ApplicationJsonObject(Fmcer503ApplicationJson fmcer503ApplicationJSONObject) {
        this.fmcer503ApplicationJSONObject = fmcer503ApplicationJSONObject;
        return this;
    }
    public Fmcer504ApplicationJson fmcer504ApplicationJSONObject;
    public FmcerResponse withFmcer504ApplicationJsonObject(Fmcer504ApplicationJson fmcer504ApplicationJSONObject) {
        this.fmcer504ApplicationJSONObject = fmcer504ApplicationJSONObject;
        return this;
    }
}