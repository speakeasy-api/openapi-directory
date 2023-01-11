package openapisdk.models.operations;



public class SscerResponse {
    public byte[] body;
    public SscerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SscerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SscerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Sscer400ApplicationJson sscer400ApplicationJSONObject;
    public SscerResponse withSscer400ApplicationJsonObject(Sscer400ApplicationJson sscer400ApplicationJSONObject) {
        this.sscer400ApplicationJSONObject = sscer400ApplicationJSONObject;
        return this;
    }
    public Sscer401ApplicationJson sscer401ApplicationJSONObject;
    public SscerResponse withSscer401ApplicationJsonObject(Sscer401ApplicationJson sscer401ApplicationJSONObject) {
        this.sscer401ApplicationJSONObject = sscer401ApplicationJSONObject;
        return this;
    }
    public Sscer404ApplicationJson sscer404ApplicationJSONObject;
    public SscerResponse withSscer404ApplicationJsonObject(Sscer404ApplicationJson sscer404ApplicationJSONObject) {
        this.sscer404ApplicationJSONObject = sscer404ApplicationJSONObject;
        return this;
    }
    public Sscer500ApplicationJson sscer500ApplicationJSONObject;
    public SscerResponse withSscer500ApplicationJsonObject(Sscer500ApplicationJson sscer500ApplicationJSONObject) {
        this.sscer500ApplicationJSONObject = sscer500ApplicationJSONObject;
        return this;
    }
    public Sscer502ApplicationJson sscer502ApplicationJSONObject;
    public SscerResponse withSscer502ApplicationJsonObject(Sscer502ApplicationJson sscer502ApplicationJSONObject) {
        this.sscer502ApplicationJSONObject = sscer502ApplicationJSONObject;
        return this;
    }
    public Sscer503ApplicationJson sscer503ApplicationJSONObject;
    public SscerResponse withSscer503ApplicationJsonObject(Sscer503ApplicationJson sscer503ApplicationJSONObject) {
        this.sscer503ApplicationJSONObject = sscer503ApplicationJSONObject;
        return this;
    }
    public Sscer504ApplicationJson sscer504ApplicationJSONObject;
    public SscerResponse withSscer504ApplicationJsonObject(Sscer504ApplicationJson sscer504ApplicationJSONObject) {
        this.sscer504ApplicationJSONObject = sscer504ApplicationJSONObject;
        return this;
    }
}