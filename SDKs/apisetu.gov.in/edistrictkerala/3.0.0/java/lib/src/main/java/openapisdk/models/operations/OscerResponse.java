package openapisdk.models.operations;



public class OscerResponse {
    public String contentType;
    public OscerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OscerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Oscer400ApplicationJson oscer400ApplicationJSONObject;
    public OscerResponse withOscer400ApplicationJsonObject(Oscer400ApplicationJson oscer400ApplicationJSONObject) {
        this.oscer400ApplicationJSONObject = oscer400ApplicationJSONObject;
        return this;
    }
    public Oscer401ApplicationJson oscer401ApplicationJSONObject;
    public OscerResponse withOscer401ApplicationJsonObject(Oscer401ApplicationJson oscer401ApplicationJSONObject) {
        this.oscer401ApplicationJSONObject = oscer401ApplicationJSONObject;
        return this;
    }
    public Oscer404ApplicationJson oscer404ApplicationJSONObject;
    public OscerResponse withOscer404ApplicationJsonObject(Oscer404ApplicationJson oscer404ApplicationJSONObject) {
        this.oscer404ApplicationJSONObject = oscer404ApplicationJSONObject;
        return this;
    }
    public Oscer500ApplicationJson oscer500ApplicationJSONObject;
    public OscerResponse withOscer500ApplicationJsonObject(Oscer500ApplicationJson oscer500ApplicationJSONObject) {
        this.oscer500ApplicationJSONObject = oscer500ApplicationJSONObject;
        return this;
    }
    public Oscer502ApplicationJson oscer502ApplicationJSONObject;
    public OscerResponse withOscer502ApplicationJsonObject(Oscer502ApplicationJson oscer502ApplicationJSONObject) {
        this.oscer502ApplicationJSONObject = oscer502ApplicationJSONObject;
        return this;
    }
    public Oscer503ApplicationJson oscer503ApplicationJSONObject;
    public OscerResponse withOscer503ApplicationJsonObject(Oscer503ApplicationJson oscer503ApplicationJSONObject) {
        this.oscer503ApplicationJSONObject = oscer503ApplicationJSONObject;
        return this;
    }
    public Oscer504ApplicationJson oscer504ApplicationJSONObject;
    public OscerResponse withOscer504ApplicationJsonObject(Oscer504ApplicationJson oscer504ApplicationJSONObject) {
        this.oscer504ApplicationJSONObject = oscer504ApplicationJSONObject;
        return this;
    }
}