package openapisdk.models.operations;



public class MbcerResponse {
    public String contentType;
    public MbcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MbcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Mbcer400ApplicationJson mbcer400ApplicationJSONObject;
    public MbcerResponse withMbcer400ApplicationJsonObject(Mbcer400ApplicationJson mbcer400ApplicationJSONObject) {
        this.mbcer400ApplicationJSONObject = mbcer400ApplicationJSONObject;
        return this;
    }
    public Mbcer401ApplicationJson mbcer401ApplicationJSONObject;
    public MbcerResponse withMbcer401ApplicationJsonObject(Mbcer401ApplicationJson mbcer401ApplicationJSONObject) {
        this.mbcer401ApplicationJSONObject = mbcer401ApplicationJSONObject;
        return this;
    }
    public Mbcer404ApplicationJson mbcer404ApplicationJSONObject;
    public MbcerResponse withMbcer404ApplicationJsonObject(Mbcer404ApplicationJson mbcer404ApplicationJSONObject) {
        this.mbcer404ApplicationJSONObject = mbcer404ApplicationJSONObject;
        return this;
    }
    public Mbcer500ApplicationJson mbcer500ApplicationJSONObject;
    public MbcerResponse withMbcer500ApplicationJsonObject(Mbcer500ApplicationJson mbcer500ApplicationJSONObject) {
        this.mbcer500ApplicationJSONObject = mbcer500ApplicationJSONObject;
        return this;
    }
    public Mbcer502ApplicationJson mbcer502ApplicationJSONObject;
    public MbcerResponse withMbcer502ApplicationJsonObject(Mbcer502ApplicationJson mbcer502ApplicationJSONObject) {
        this.mbcer502ApplicationJSONObject = mbcer502ApplicationJSONObject;
        return this;
    }
    public Mbcer503ApplicationJson mbcer503ApplicationJSONObject;
    public MbcerResponse withMbcer503ApplicationJsonObject(Mbcer503ApplicationJson mbcer503ApplicationJSONObject) {
        this.mbcer503ApplicationJSONObject = mbcer503ApplicationJSONObject;
        return this;
    }
    public Mbcer504ApplicationJson mbcer504ApplicationJSONObject;
    public MbcerResponse withMbcer504ApplicationJsonObject(Mbcer504ApplicationJson mbcer504ApplicationJSONObject) {
        this.mbcer504ApplicationJSONObject = mbcer504ApplicationJSONObject;
        return this;
    }
}