package openapisdk.models.operations;



public class PscerResponse {
    public String contentType;
    public PscerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PscerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Pscer400ApplicationJson pscer400ApplicationJSONObject;
    public PscerResponse withPscer400ApplicationJsonObject(Pscer400ApplicationJson pscer400ApplicationJSONObject) {
        this.pscer400ApplicationJSONObject = pscer400ApplicationJSONObject;
        return this;
    }
    public Pscer401ApplicationJson pscer401ApplicationJSONObject;
    public PscerResponse withPscer401ApplicationJsonObject(Pscer401ApplicationJson pscer401ApplicationJSONObject) {
        this.pscer401ApplicationJSONObject = pscer401ApplicationJSONObject;
        return this;
    }
    public Pscer404ApplicationJson pscer404ApplicationJSONObject;
    public PscerResponse withPscer404ApplicationJsonObject(Pscer404ApplicationJson pscer404ApplicationJSONObject) {
        this.pscer404ApplicationJSONObject = pscer404ApplicationJSONObject;
        return this;
    }
    public Pscer500ApplicationJson pscer500ApplicationJSONObject;
    public PscerResponse withPscer500ApplicationJsonObject(Pscer500ApplicationJson pscer500ApplicationJSONObject) {
        this.pscer500ApplicationJSONObject = pscer500ApplicationJSONObject;
        return this;
    }
    public Pscer502ApplicationJson pscer502ApplicationJSONObject;
    public PscerResponse withPscer502ApplicationJsonObject(Pscer502ApplicationJson pscer502ApplicationJSONObject) {
        this.pscer502ApplicationJSONObject = pscer502ApplicationJSONObject;
        return this;
    }
    public Pscer503ApplicationJson pscer503ApplicationJSONObject;
    public PscerResponse withPscer503ApplicationJsonObject(Pscer503ApplicationJson pscer503ApplicationJSONObject) {
        this.pscer503ApplicationJSONObject = pscer503ApplicationJSONObject;
        return this;
    }
    public Pscer504ApplicationJson pscer504ApplicationJSONObject;
    public PscerResponse withPscer504ApplicationJsonObject(Pscer504ApplicationJson pscer504ApplicationJSONObject) {
        this.pscer504ApplicationJSONObject = pscer504ApplicationJSONObject;
        return this;
    }
}