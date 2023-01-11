package openapisdk.models.operations;



public class DscerResponse {
    public String contentType;
    public DscerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DscerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Dscer400ApplicationJson dscer400ApplicationJSONObject;
    public DscerResponse withDscer400ApplicationJsonObject(Dscer400ApplicationJson dscer400ApplicationJSONObject) {
        this.dscer400ApplicationJSONObject = dscer400ApplicationJSONObject;
        return this;
    }
    public Dscer401ApplicationJson dscer401ApplicationJSONObject;
    public DscerResponse withDscer401ApplicationJsonObject(Dscer401ApplicationJson dscer401ApplicationJSONObject) {
        this.dscer401ApplicationJSONObject = dscer401ApplicationJSONObject;
        return this;
    }
    public Dscer404ApplicationJson dscer404ApplicationJSONObject;
    public DscerResponse withDscer404ApplicationJsonObject(Dscer404ApplicationJson dscer404ApplicationJSONObject) {
        this.dscer404ApplicationJSONObject = dscer404ApplicationJSONObject;
        return this;
    }
    public Dscer500ApplicationJson dscer500ApplicationJSONObject;
    public DscerResponse withDscer500ApplicationJsonObject(Dscer500ApplicationJson dscer500ApplicationJSONObject) {
        this.dscer500ApplicationJSONObject = dscer500ApplicationJSONObject;
        return this;
    }
    public Dscer502ApplicationJson dscer502ApplicationJSONObject;
    public DscerResponse withDscer502ApplicationJsonObject(Dscer502ApplicationJson dscer502ApplicationJSONObject) {
        this.dscer502ApplicationJSONObject = dscer502ApplicationJSONObject;
        return this;
    }
    public Dscer503ApplicationJson dscer503ApplicationJSONObject;
    public DscerResponse withDscer503ApplicationJsonObject(Dscer503ApplicationJson dscer503ApplicationJSONObject) {
        this.dscer503ApplicationJSONObject = dscer503ApplicationJSONObject;
        return this;
    }
    public Dscer504ApplicationJson dscer504ApplicationJSONObject;
    public DscerResponse withDscer504ApplicationJsonObject(Dscer504ApplicationJson dscer504ApplicationJSONObject) {
        this.dscer504ApplicationJSONObject = dscer504ApplicationJSONObject;
        return this;
    }
}