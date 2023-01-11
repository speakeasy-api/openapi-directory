package openapisdk.models.operations;



public class EpfscResponse {
    public String contentType;
    public EpfscResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EpfscResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Epfsc400ApplicationJson epfsc400ApplicationJSONObject;
    public EpfscResponse withEpfsc400ApplicationJsonObject(Epfsc400ApplicationJson epfsc400ApplicationJSONObject) {
        this.epfsc400ApplicationJSONObject = epfsc400ApplicationJSONObject;
        return this;
    }
    public Epfsc401ApplicationJson epfsc401ApplicationJSONObject;
    public EpfscResponse withEpfsc401ApplicationJsonObject(Epfsc401ApplicationJson epfsc401ApplicationJSONObject) {
        this.epfsc401ApplicationJSONObject = epfsc401ApplicationJSONObject;
        return this;
    }
    public Epfsc404ApplicationJson epfsc404ApplicationJSONObject;
    public EpfscResponse withEpfsc404ApplicationJsonObject(Epfsc404ApplicationJson epfsc404ApplicationJSONObject) {
        this.epfsc404ApplicationJSONObject = epfsc404ApplicationJSONObject;
        return this;
    }
    public Epfsc500ApplicationJson epfsc500ApplicationJSONObject;
    public EpfscResponse withEpfsc500ApplicationJsonObject(Epfsc500ApplicationJson epfsc500ApplicationJSONObject) {
        this.epfsc500ApplicationJSONObject = epfsc500ApplicationJSONObject;
        return this;
    }
    public Epfsc502ApplicationJson epfsc502ApplicationJSONObject;
    public EpfscResponse withEpfsc502ApplicationJsonObject(Epfsc502ApplicationJson epfsc502ApplicationJSONObject) {
        this.epfsc502ApplicationJSONObject = epfsc502ApplicationJSONObject;
        return this;
    }
    public Epfsc503ApplicationJson epfsc503ApplicationJSONObject;
    public EpfscResponse withEpfsc503ApplicationJsonObject(Epfsc503ApplicationJson epfsc503ApplicationJSONObject) {
        this.epfsc503ApplicationJSONObject = epfsc503ApplicationJSONObject;
        return this;
    }
    public Epfsc504ApplicationJson epfsc504ApplicationJSONObject;
    public EpfscResponse withEpfsc504ApplicationJsonObject(Epfsc504ApplicationJson epfsc504ApplicationJSONObject) {
        this.epfsc504ApplicationJSONObject = epfsc504ApplicationJSONObject;
        return this;
    }
}