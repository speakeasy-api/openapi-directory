package openapisdk.models.operations;



public class NstscResponse {
    public String contentType;
    public NstscResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NstscResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Nstsc400ApplicationJson nstsc400ApplicationJSONObject;
    public NstscResponse withNstsc400ApplicationJsonObject(Nstsc400ApplicationJson nstsc400ApplicationJSONObject) {
        this.nstsc400ApplicationJSONObject = nstsc400ApplicationJSONObject;
        return this;
    }
    public Nstsc401ApplicationJson nstsc401ApplicationJSONObject;
    public NstscResponse withNstsc401ApplicationJsonObject(Nstsc401ApplicationJson nstsc401ApplicationJSONObject) {
        this.nstsc401ApplicationJSONObject = nstsc401ApplicationJSONObject;
        return this;
    }
    public Nstsc404ApplicationJson nstsc404ApplicationJSONObject;
    public NstscResponse withNstsc404ApplicationJsonObject(Nstsc404ApplicationJson nstsc404ApplicationJSONObject) {
        this.nstsc404ApplicationJSONObject = nstsc404ApplicationJSONObject;
        return this;
    }
    public Nstsc500ApplicationJson nstsc500ApplicationJSONObject;
    public NstscResponse withNstsc500ApplicationJsonObject(Nstsc500ApplicationJson nstsc500ApplicationJSONObject) {
        this.nstsc500ApplicationJSONObject = nstsc500ApplicationJSONObject;
        return this;
    }
    public Nstsc502ApplicationJson nstsc502ApplicationJSONObject;
    public NstscResponse withNstsc502ApplicationJsonObject(Nstsc502ApplicationJson nstsc502ApplicationJSONObject) {
        this.nstsc502ApplicationJSONObject = nstsc502ApplicationJSONObject;
        return this;
    }
    public Nstsc503ApplicationJson nstsc503ApplicationJSONObject;
    public NstscResponse withNstsc503ApplicationJsonObject(Nstsc503ApplicationJson nstsc503ApplicationJSONObject) {
        this.nstsc503ApplicationJSONObject = nstsc503ApplicationJSONObject;
        return this;
    }
    public Nstsc504ApplicationJson nstsc504ApplicationJSONObject;
    public NstscResponse withNstsc504ApplicationJsonObject(Nstsc504ApplicationJson nstsc504ApplicationJSONObject) {
        this.nstsc504ApplicationJSONObject = nstsc504ApplicationJSONObject;
        return this;
    }
}