package openapisdk.models.operations;



public class NtcerResponse {
    public String contentType;
    public NtcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NtcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Ntcer400ApplicationJson ntcer400ApplicationJSONObject;
    public NtcerResponse withNtcer400ApplicationJsonObject(Ntcer400ApplicationJson ntcer400ApplicationJSONObject) {
        this.ntcer400ApplicationJSONObject = ntcer400ApplicationJSONObject;
        return this;
    }
    public Ntcer401ApplicationJson ntcer401ApplicationJSONObject;
    public NtcerResponse withNtcer401ApplicationJsonObject(Ntcer401ApplicationJson ntcer401ApplicationJSONObject) {
        this.ntcer401ApplicationJSONObject = ntcer401ApplicationJSONObject;
        return this;
    }
    public Ntcer404ApplicationJson ntcer404ApplicationJSONObject;
    public NtcerResponse withNtcer404ApplicationJsonObject(Ntcer404ApplicationJson ntcer404ApplicationJSONObject) {
        this.ntcer404ApplicationJSONObject = ntcer404ApplicationJSONObject;
        return this;
    }
    public Ntcer500ApplicationJson ntcer500ApplicationJSONObject;
    public NtcerResponse withNtcer500ApplicationJsonObject(Ntcer500ApplicationJson ntcer500ApplicationJSONObject) {
        this.ntcer500ApplicationJSONObject = ntcer500ApplicationJSONObject;
        return this;
    }
    public Ntcer502ApplicationJson ntcer502ApplicationJSONObject;
    public NtcerResponse withNtcer502ApplicationJsonObject(Ntcer502ApplicationJson ntcer502ApplicationJSONObject) {
        this.ntcer502ApplicationJSONObject = ntcer502ApplicationJSONObject;
        return this;
    }
    public Ntcer503ApplicationJson ntcer503ApplicationJSONObject;
    public NtcerResponse withNtcer503ApplicationJsonObject(Ntcer503ApplicationJson ntcer503ApplicationJSONObject) {
        this.ntcer503ApplicationJSONObject = ntcer503ApplicationJSONObject;
        return this;
    }
    public Ntcer504ApplicationJson ntcer504ApplicationJSONObject;
    public NtcerResponse withNtcer504ApplicationJsonObject(Ntcer504ApplicationJson ntcer504ApplicationJSONObject) {
        this.ntcer504ApplicationJSONObject = ntcer504ApplicationJSONObject;
        return this;
    }
}