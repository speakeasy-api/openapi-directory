package openapisdk.models.operations;



public class CncerResponse {
    public byte[] body;
    public CncerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CncerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CncerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Cncer400ApplicationJson cncer400ApplicationJSONObject;
    public CncerResponse withCncer400ApplicationJsonObject(Cncer400ApplicationJson cncer400ApplicationJSONObject) {
        this.cncer400ApplicationJSONObject = cncer400ApplicationJSONObject;
        return this;
    }
    public Cncer401ApplicationJson cncer401ApplicationJSONObject;
    public CncerResponse withCncer401ApplicationJsonObject(Cncer401ApplicationJson cncer401ApplicationJSONObject) {
        this.cncer401ApplicationJSONObject = cncer401ApplicationJSONObject;
        return this;
    }
    public Cncer404ApplicationJson cncer404ApplicationJSONObject;
    public CncerResponse withCncer404ApplicationJsonObject(Cncer404ApplicationJson cncer404ApplicationJSONObject) {
        this.cncer404ApplicationJSONObject = cncer404ApplicationJSONObject;
        return this;
    }
    public Cncer500ApplicationJson cncer500ApplicationJSONObject;
    public CncerResponse withCncer500ApplicationJsonObject(Cncer500ApplicationJson cncer500ApplicationJSONObject) {
        this.cncer500ApplicationJSONObject = cncer500ApplicationJSONObject;
        return this;
    }
    public Cncer502ApplicationJson cncer502ApplicationJSONObject;
    public CncerResponse withCncer502ApplicationJsonObject(Cncer502ApplicationJson cncer502ApplicationJSONObject) {
        this.cncer502ApplicationJSONObject = cncer502ApplicationJSONObject;
        return this;
    }
    public Cncer503ApplicationJson cncer503ApplicationJSONObject;
    public CncerResponse withCncer503ApplicationJsonObject(Cncer503ApplicationJson cncer503ApplicationJSONObject) {
        this.cncer503ApplicationJSONObject = cncer503ApplicationJSONObject;
        return this;
    }
    public Cncer504ApplicationJson cncer504ApplicationJSONObject;
    public CncerResponse withCncer504ApplicationJsonObject(Cncer504ApplicationJson cncer504ApplicationJSONObject) {
        this.cncer504ApplicationJSONObject = cncer504ApplicationJSONObject;
        return this;
    }
}