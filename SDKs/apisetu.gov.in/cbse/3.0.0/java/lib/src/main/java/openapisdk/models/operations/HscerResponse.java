package openapisdk.models.operations;



public class HscerResponse {
    public byte[] body;
    public HscerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public HscerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HscerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Hscer400ApplicationJson hscer400ApplicationJSONObject;
    public HscerResponse withHscer400ApplicationJsonObject(Hscer400ApplicationJson hscer400ApplicationJSONObject) {
        this.hscer400ApplicationJSONObject = hscer400ApplicationJSONObject;
        return this;
    }
    public Hscer401ApplicationJson hscer401ApplicationJSONObject;
    public HscerResponse withHscer401ApplicationJsonObject(Hscer401ApplicationJson hscer401ApplicationJSONObject) {
        this.hscer401ApplicationJSONObject = hscer401ApplicationJSONObject;
        return this;
    }
    public Hscer404ApplicationJson hscer404ApplicationJSONObject;
    public HscerResponse withHscer404ApplicationJsonObject(Hscer404ApplicationJson hscer404ApplicationJSONObject) {
        this.hscer404ApplicationJSONObject = hscer404ApplicationJSONObject;
        return this;
    }
    public Hscer500ApplicationJson hscer500ApplicationJSONObject;
    public HscerResponse withHscer500ApplicationJsonObject(Hscer500ApplicationJson hscer500ApplicationJSONObject) {
        this.hscer500ApplicationJSONObject = hscer500ApplicationJSONObject;
        return this;
    }
    public Hscer502ApplicationJson hscer502ApplicationJSONObject;
    public HscerResponse withHscer502ApplicationJsonObject(Hscer502ApplicationJson hscer502ApplicationJSONObject) {
        this.hscer502ApplicationJSONObject = hscer502ApplicationJSONObject;
        return this;
    }
    public Hscer503ApplicationJson hscer503ApplicationJSONObject;
    public HscerResponse withHscer503ApplicationJsonObject(Hscer503ApplicationJson hscer503ApplicationJSONObject) {
        this.hscer503ApplicationJSONObject = hscer503ApplicationJSONObject;
        return this;
    }
    public Hscer504ApplicationJson hscer504ApplicationJSONObject;
    public HscerResponse withHscer504ApplicationJsonObject(Hscer504ApplicationJson hscer504ApplicationJSONObject) {
        this.hscer504ApplicationJSONObject = hscer504ApplicationJSONObject;
        return this;
    }
}