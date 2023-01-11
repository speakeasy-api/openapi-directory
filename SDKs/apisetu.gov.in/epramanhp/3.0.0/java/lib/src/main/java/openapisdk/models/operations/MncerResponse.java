package openapisdk.models.operations;



public class MncerResponse {
    public String contentType;
    public MncerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MncerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Mncer400ApplicationJson mncer400ApplicationJSONObject;
    public MncerResponse withMncer400ApplicationJsonObject(Mncer400ApplicationJson mncer400ApplicationJSONObject) {
        this.mncer400ApplicationJSONObject = mncer400ApplicationJSONObject;
        return this;
    }
    public Mncer401ApplicationJson mncer401ApplicationJSONObject;
    public MncerResponse withMncer401ApplicationJsonObject(Mncer401ApplicationJson mncer401ApplicationJSONObject) {
        this.mncer401ApplicationJSONObject = mncer401ApplicationJSONObject;
        return this;
    }
    public Mncer404ApplicationJson mncer404ApplicationJSONObject;
    public MncerResponse withMncer404ApplicationJsonObject(Mncer404ApplicationJson mncer404ApplicationJSONObject) {
        this.mncer404ApplicationJSONObject = mncer404ApplicationJSONObject;
        return this;
    }
    public Mncer500ApplicationJson mncer500ApplicationJSONObject;
    public MncerResponse withMncer500ApplicationJsonObject(Mncer500ApplicationJson mncer500ApplicationJSONObject) {
        this.mncer500ApplicationJSONObject = mncer500ApplicationJSONObject;
        return this;
    }
    public Mncer502ApplicationJson mncer502ApplicationJSONObject;
    public MncerResponse withMncer502ApplicationJsonObject(Mncer502ApplicationJson mncer502ApplicationJSONObject) {
        this.mncer502ApplicationJSONObject = mncer502ApplicationJSONObject;
        return this;
    }
    public Mncer503ApplicationJson mncer503ApplicationJSONObject;
    public MncerResponse withMncer503ApplicationJsonObject(Mncer503ApplicationJson mncer503ApplicationJSONObject) {
        this.mncer503ApplicationJSONObject = mncer503ApplicationJSONObject;
        return this;
    }
    public Mncer504ApplicationJson mncer504ApplicationJSONObject;
    public MncerResponse withMncer504ApplicationJsonObject(Mncer504ApplicationJson mncer504ApplicationJSONObject) {
        this.mncer504ApplicationJSONObject = mncer504ApplicationJSONObject;
        return this;
    }
}