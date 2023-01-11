package openapisdk.models.operations;



public class PhcerResponse {
    public String contentType;
    public PhcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PhcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Phcer400ApplicationJson phcer400ApplicationJSONObject;
    public PhcerResponse withPhcer400ApplicationJsonObject(Phcer400ApplicationJson phcer400ApplicationJSONObject) {
        this.phcer400ApplicationJSONObject = phcer400ApplicationJSONObject;
        return this;
    }
    public Phcer401ApplicationJson phcer401ApplicationJSONObject;
    public PhcerResponse withPhcer401ApplicationJsonObject(Phcer401ApplicationJson phcer401ApplicationJSONObject) {
        this.phcer401ApplicationJSONObject = phcer401ApplicationJSONObject;
        return this;
    }
    public Phcer404ApplicationJson phcer404ApplicationJSONObject;
    public PhcerResponse withPhcer404ApplicationJsonObject(Phcer404ApplicationJson phcer404ApplicationJSONObject) {
        this.phcer404ApplicationJSONObject = phcer404ApplicationJSONObject;
        return this;
    }
    public Phcer500ApplicationJson phcer500ApplicationJSONObject;
    public PhcerResponse withPhcer500ApplicationJsonObject(Phcer500ApplicationJson phcer500ApplicationJSONObject) {
        this.phcer500ApplicationJSONObject = phcer500ApplicationJSONObject;
        return this;
    }
    public Phcer502ApplicationJson phcer502ApplicationJSONObject;
    public PhcerResponse withPhcer502ApplicationJsonObject(Phcer502ApplicationJson phcer502ApplicationJSONObject) {
        this.phcer502ApplicationJSONObject = phcer502ApplicationJSONObject;
        return this;
    }
    public Phcer503ApplicationJson phcer503ApplicationJSONObject;
    public PhcerResponse withPhcer503ApplicationJsonObject(Phcer503ApplicationJson phcer503ApplicationJSONObject) {
        this.phcer503ApplicationJSONObject = phcer503ApplicationJSONObject;
        return this;
    }
    public Phcer504ApplicationJson phcer504ApplicationJSONObject;
    public PhcerResponse withPhcer504ApplicationJsonObject(Phcer504ApplicationJson phcer504ApplicationJSONObject) {
        this.phcer504ApplicationJSONObject = phcer504ApplicationJSONObject;
        return this;
    }
}