package openapisdk.models.operations;



public class DncerResponse {
    public String contentType;
    public DncerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DncerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Dncer400ApplicationJson dncer400ApplicationJSONObject;
    public DncerResponse withDncer400ApplicationJsonObject(Dncer400ApplicationJson dncer400ApplicationJSONObject) {
        this.dncer400ApplicationJSONObject = dncer400ApplicationJSONObject;
        return this;
    }
    public Dncer401ApplicationJson dncer401ApplicationJSONObject;
    public DncerResponse withDncer401ApplicationJsonObject(Dncer401ApplicationJson dncer401ApplicationJSONObject) {
        this.dncer401ApplicationJSONObject = dncer401ApplicationJSONObject;
        return this;
    }
    public Dncer404ApplicationJson dncer404ApplicationJSONObject;
    public DncerResponse withDncer404ApplicationJsonObject(Dncer404ApplicationJson dncer404ApplicationJSONObject) {
        this.dncer404ApplicationJSONObject = dncer404ApplicationJSONObject;
        return this;
    }
    public Dncer500ApplicationJson dncer500ApplicationJSONObject;
    public DncerResponse withDncer500ApplicationJsonObject(Dncer500ApplicationJson dncer500ApplicationJSONObject) {
        this.dncer500ApplicationJSONObject = dncer500ApplicationJSONObject;
        return this;
    }
    public Dncer502ApplicationJson dncer502ApplicationJSONObject;
    public DncerResponse withDncer502ApplicationJsonObject(Dncer502ApplicationJson dncer502ApplicationJSONObject) {
        this.dncer502ApplicationJSONObject = dncer502ApplicationJSONObject;
        return this;
    }
    public Dncer503ApplicationJson dncer503ApplicationJSONObject;
    public DncerResponse withDncer503ApplicationJsonObject(Dncer503ApplicationJson dncer503ApplicationJSONObject) {
        this.dncer503ApplicationJSONObject = dncer503ApplicationJSONObject;
        return this;
    }
    public Dncer504ApplicationJson dncer504ApplicationJSONObject;
    public DncerResponse withDncer504ApplicationJsonObject(Dncer504ApplicationJson dncer504ApplicationJSONObject) {
        this.dncer504ApplicationJSONObject = dncer504ApplicationJSONObject;
        return this;
    }
}