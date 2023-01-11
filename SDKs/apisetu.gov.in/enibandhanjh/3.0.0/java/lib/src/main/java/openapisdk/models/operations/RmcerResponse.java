package openapisdk.models.operations;



public class RmcerResponse {
    public String contentType;
    public RmcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RmcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Rmcer400ApplicationJson rmcer400ApplicationJSONObject;
    public RmcerResponse withRmcer400ApplicationJsonObject(Rmcer400ApplicationJson rmcer400ApplicationJSONObject) {
        this.rmcer400ApplicationJSONObject = rmcer400ApplicationJSONObject;
        return this;
    }
    public Rmcer401ApplicationJson rmcer401ApplicationJSONObject;
    public RmcerResponse withRmcer401ApplicationJsonObject(Rmcer401ApplicationJson rmcer401ApplicationJSONObject) {
        this.rmcer401ApplicationJSONObject = rmcer401ApplicationJSONObject;
        return this;
    }
    public Rmcer404ApplicationJson rmcer404ApplicationJSONObject;
    public RmcerResponse withRmcer404ApplicationJsonObject(Rmcer404ApplicationJson rmcer404ApplicationJSONObject) {
        this.rmcer404ApplicationJSONObject = rmcer404ApplicationJSONObject;
        return this;
    }
    public Rmcer500ApplicationJson rmcer500ApplicationJSONObject;
    public RmcerResponse withRmcer500ApplicationJsonObject(Rmcer500ApplicationJson rmcer500ApplicationJSONObject) {
        this.rmcer500ApplicationJSONObject = rmcer500ApplicationJSONObject;
        return this;
    }
    public Rmcer502ApplicationJson rmcer502ApplicationJSONObject;
    public RmcerResponse withRmcer502ApplicationJsonObject(Rmcer502ApplicationJson rmcer502ApplicationJSONObject) {
        this.rmcer502ApplicationJSONObject = rmcer502ApplicationJSONObject;
        return this;
    }
    public Rmcer503ApplicationJson rmcer503ApplicationJSONObject;
    public RmcerResponse withRmcer503ApplicationJsonObject(Rmcer503ApplicationJson rmcer503ApplicationJSONObject) {
        this.rmcer503ApplicationJSONObject = rmcer503ApplicationJSONObject;
        return this;
    }
    public Rmcer504ApplicationJson rmcer504ApplicationJSONObject;
    public RmcerResponse withRmcer504ApplicationJsonObject(Rmcer504ApplicationJson rmcer504ApplicationJSONObject) {
        this.rmcer504ApplicationJSONObject = rmcer504ApplicationJSONObject;
        return this;
    }
}