package openapisdk.models.operations;



public class PripcResponse {
    public String contentType;
    public PripcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PripcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Pripc400ApplicationJson pripc400ApplicationJSONObject;
    public PripcResponse withPripc400ApplicationJsonObject(Pripc400ApplicationJson pripc400ApplicationJSONObject) {
        this.pripc400ApplicationJSONObject = pripc400ApplicationJSONObject;
        return this;
    }
    public Pripc401ApplicationJson pripc401ApplicationJSONObject;
    public PripcResponse withPripc401ApplicationJsonObject(Pripc401ApplicationJson pripc401ApplicationJSONObject) {
        this.pripc401ApplicationJSONObject = pripc401ApplicationJSONObject;
        return this;
    }
    public Pripc404ApplicationJson pripc404ApplicationJSONObject;
    public PripcResponse withPripc404ApplicationJsonObject(Pripc404ApplicationJson pripc404ApplicationJSONObject) {
        this.pripc404ApplicationJSONObject = pripc404ApplicationJSONObject;
        return this;
    }
    public Pripc500ApplicationJson pripc500ApplicationJSONObject;
    public PripcResponse withPripc500ApplicationJsonObject(Pripc500ApplicationJson pripc500ApplicationJSONObject) {
        this.pripc500ApplicationJSONObject = pripc500ApplicationJSONObject;
        return this;
    }
    public Pripc502ApplicationJson pripc502ApplicationJSONObject;
    public PripcResponse withPripc502ApplicationJsonObject(Pripc502ApplicationJson pripc502ApplicationJSONObject) {
        this.pripc502ApplicationJSONObject = pripc502ApplicationJSONObject;
        return this;
    }
    public Pripc503ApplicationJson pripc503ApplicationJSONObject;
    public PripcResponse withPripc503ApplicationJsonObject(Pripc503ApplicationJson pripc503ApplicationJSONObject) {
        this.pripc503ApplicationJSONObject = pripc503ApplicationJSONObject;
        return this;
    }
    public Pripc504ApplicationJson pripc504ApplicationJSONObject;
    public PripcResponse withPripc504ApplicationJsonObject(Pripc504ApplicationJson pripc504ApplicationJSONObject) {
        this.pripc504ApplicationJSONObject = pripc504ApplicationJSONObject;
        return this;
    }
}