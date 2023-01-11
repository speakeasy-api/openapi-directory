package openapisdk.models.operations;



public class SpcerResponse {
    public byte[] body;
    public SpcerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SpcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SpcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Spcer400ApplicationJson spcer400ApplicationJSONObject;
    public SpcerResponse withSpcer400ApplicationJsonObject(Spcer400ApplicationJson spcer400ApplicationJSONObject) {
        this.spcer400ApplicationJSONObject = spcer400ApplicationJSONObject;
        return this;
    }
    public Spcer401ApplicationJson spcer401ApplicationJSONObject;
    public SpcerResponse withSpcer401ApplicationJsonObject(Spcer401ApplicationJson spcer401ApplicationJSONObject) {
        this.spcer401ApplicationJSONObject = spcer401ApplicationJSONObject;
        return this;
    }
    public Spcer404ApplicationJson spcer404ApplicationJSONObject;
    public SpcerResponse withSpcer404ApplicationJsonObject(Spcer404ApplicationJson spcer404ApplicationJSONObject) {
        this.spcer404ApplicationJSONObject = spcer404ApplicationJSONObject;
        return this;
    }
    public Spcer500ApplicationJson spcer500ApplicationJSONObject;
    public SpcerResponse withSpcer500ApplicationJsonObject(Spcer500ApplicationJson spcer500ApplicationJSONObject) {
        this.spcer500ApplicationJSONObject = spcer500ApplicationJSONObject;
        return this;
    }
    public Spcer502ApplicationJson spcer502ApplicationJSONObject;
    public SpcerResponse withSpcer502ApplicationJsonObject(Spcer502ApplicationJson spcer502ApplicationJSONObject) {
        this.spcer502ApplicationJSONObject = spcer502ApplicationJSONObject;
        return this;
    }
    public Spcer503ApplicationJson spcer503ApplicationJSONObject;
    public SpcerResponse withSpcer503ApplicationJsonObject(Spcer503ApplicationJson spcer503ApplicationJSONObject) {
        this.spcer503ApplicationJSONObject = spcer503ApplicationJSONObject;
        return this;
    }
    public Spcer504ApplicationJson spcer504ApplicationJSONObject;
    public SpcerResponse withSpcer504ApplicationJsonObject(Spcer504ApplicationJson spcer504ApplicationJSONObject) {
        this.spcer504ApplicationJSONObject = spcer504ApplicationJSONObject;
        return this;
    }
}