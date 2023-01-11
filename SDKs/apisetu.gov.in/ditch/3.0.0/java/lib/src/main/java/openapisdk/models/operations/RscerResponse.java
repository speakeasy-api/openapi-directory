package openapisdk.models.operations;



public class RscerResponse {
    public String contentType;
    public RscerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RscerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Rscer400ApplicationJson rscer400ApplicationJSONObject;
    public RscerResponse withRscer400ApplicationJsonObject(Rscer400ApplicationJson rscer400ApplicationJSONObject) {
        this.rscer400ApplicationJSONObject = rscer400ApplicationJSONObject;
        return this;
    }
    public Rscer401ApplicationJson rscer401ApplicationJSONObject;
    public RscerResponse withRscer401ApplicationJsonObject(Rscer401ApplicationJson rscer401ApplicationJSONObject) {
        this.rscer401ApplicationJSONObject = rscer401ApplicationJSONObject;
        return this;
    }
    public Rscer404ApplicationJson rscer404ApplicationJSONObject;
    public RscerResponse withRscer404ApplicationJsonObject(Rscer404ApplicationJson rscer404ApplicationJSONObject) {
        this.rscer404ApplicationJSONObject = rscer404ApplicationJSONObject;
        return this;
    }
    public Rscer500ApplicationJson rscer500ApplicationJSONObject;
    public RscerResponse withRscer500ApplicationJsonObject(Rscer500ApplicationJson rscer500ApplicationJSONObject) {
        this.rscer500ApplicationJSONObject = rscer500ApplicationJSONObject;
        return this;
    }
    public Rscer502ApplicationJson rscer502ApplicationJSONObject;
    public RscerResponse withRscer502ApplicationJsonObject(Rscer502ApplicationJson rscer502ApplicationJSONObject) {
        this.rscer502ApplicationJSONObject = rscer502ApplicationJSONObject;
        return this;
    }
    public Rscer503ApplicationJson rscer503ApplicationJSONObject;
    public RscerResponse withRscer503ApplicationJsonObject(Rscer503ApplicationJson rscer503ApplicationJSONObject) {
        this.rscer503ApplicationJSONObject = rscer503ApplicationJSONObject;
        return this;
    }
    public Rscer504ApplicationJson rscer504ApplicationJSONObject;
    public RscerResponse withRscer504ApplicationJsonObject(Rscer504ApplicationJson rscer504ApplicationJSONObject) {
        this.rscer504ApplicationJSONObject = rscer504ApplicationJSONObject;
        return this;
    }
}