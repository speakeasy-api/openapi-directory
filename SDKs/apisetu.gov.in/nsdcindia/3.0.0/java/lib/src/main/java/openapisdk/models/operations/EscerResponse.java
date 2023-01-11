package openapisdk.models.operations;



public class EscerResponse {
    public String contentType;
    public EscerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EscerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Escer400ApplicationJson escer400ApplicationJSONObject;
    public EscerResponse withEscer400ApplicationJsonObject(Escer400ApplicationJson escer400ApplicationJSONObject) {
        this.escer400ApplicationJSONObject = escer400ApplicationJSONObject;
        return this;
    }
    public Escer401ApplicationJson escer401ApplicationJSONObject;
    public EscerResponse withEscer401ApplicationJsonObject(Escer401ApplicationJson escer401ApplicationJSONObject) {
        this.escer401ApplicationJSONObject = escer401ApplicationJSONObject;
        return this;
    }
    public Escer404ApplicationJson escer404ApplicationJSONObject;
    public EscerResponse withEscer404ApplicationJsonObject(Escer404ApplicationJson escer404ApplicationJSONObject) {
        this.escer404ApplicationJSONObject = escer404ApplicationJSONObject;
        return this;
    }
    public Escer500ApplicationJson escer500ApplicationJSONObject;
    public EscerResponse withEscer500ApplicationJsonObject(Escer500ApplicationJson escer500ApplicationJSONObject) {
        this.escer500ApplicationJSONObject = escer500ApplicationJSONObject;
        return this;
    }
    public Escer502ApplicationJson escer502ApplicationJSONObject;
    public EscerResponse withEscer502ApplicationJsonObject(Escer502ApplicationJson escer502ApplicationJSONObject) {
        this.escer502ApplicationJSONObject = escer502ApplicationJSONObject;
        return this;
    }
    public Escer503ApplicationJson escer503ApplicationJSONObject;
    public EscerResponse withEscer503ApplicationJsonObject(Escer503ApplicationJson escer503ApplicationJSONObject) {
        this.escer503ApplicationJSONObject = escer503ApplicationJSONObject;
        return this;
    }
    public Escer504ApplicationJson escer504ApplicationJSONObject;
    public EscerResponse withEscer504ApplicationJsonObject(Escer504ApplicationJson escer504ApplicationJSONObject) {
        this.escer504ApplicationJSONObject = escer504ApplicationJSONObject;
        return this;
    }
}