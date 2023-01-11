package openapisdk.models.operations;



public class CripcResponse {
    public String contentType;
    public CripcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CripcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Cripc400ApplicationJson cripc400ApplicationJSONObject;
    public CripcResponse withCripc400ApplicationJsonObject(Cripc400ApplicationJson cripc400ApplicationJSONObject) {
        this.cripc400ApplicationJSONObject = cripc400ApplicationJSONObject;
        return this;
    }
    public Cripc401ApplicationJson cripc401ApplicationJSONObject;
    public CripcResponse withCripc401ApplicationJsonObject(Cripc401ApplicationJson cripc401ApplicationJSONObject) {
        this.cripc401ApplicationJSONObject = cripc401ApplicationJSONObject;
        return this;
    }
    public Cripc404ApplicationJson cripc404ApplicationJSONObject;
    public CripcResponse withCripc404ApplicationJsonObject(Cripc404ApplicationJson cripc404ApplicationJSONObject) {
        this.cripc404ApplicationJSONObject = cripc404ApplicationJSONObject;
        return this;
    }
    public Cripc500ApplicationJson cripc500ApplicationJSONObject;
    public CripcResponse withCripc500ApplicationJsonObject(Cripc500ApplicationJson cripc500ApplicationJSONObject) {
        this.cripc500ApplicationJSONObject = cripc500ApplicationJSONObject;
        return this;
    }
    public Cripc502ApplicationJson cripc502ApplicationJSONObject;
    public CripcResponse withCripc502ApplicationJsonObject(Cripc502ApplicationJson cripc502ApplicationJSONObject) {
        this.cripc502ApplicationJSONObject = cripc502ApplicationJSONObject;
        return this;
    }
    public Cripc503ApplicationJson cripc503ApplicationJSONObject;
    public CripcResponse withCripc503ApplicationJsonObject(Cripc503ApplicationJson cripc503ApplicationJSONObject) {
        this.cripc503ApplicationJSONObject = cripc503ApplicationJSONObject;
        return this;
    }
    public Cripc504ApplicationJson cripc504ApplicationJSONObject;
    public CripcResponse withCripc504ApplicationJsonObject(Cripc504ApplicationJson cripc504ApplicationJSONObject) {
        this.cripc504ApplicationJSONObject = cripc504ApplicationJSONObject;
        return this;
    }
}