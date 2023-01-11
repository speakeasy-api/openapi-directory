package openapisdk.models.operations;



public class NctscResponse {
    public String contentType;
    public NctscResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NctscResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Nctsc400ApplicationJson nctsc400ApplicationJSONObject;
    public NctscResponse withNctsc400ApplicationJsonObject(Nctsc400ApplicationJson nctsc400ApplicationJSONObject) {
        this.nctsc400ApplicationJSONObject = nctsc400ApplicationJSONObject;
        return this;
    }
    public Nctsc401ApplicationJson nctsc401ApplicationJSONObject;
    public NctscResponse withNctsc401ApplicationJsonObject(Nctsc401ApplicationJson nctsc401ApplicationJSONObject) {
        this.nctsc401ApplicationJSONObject = nctsc401ApplicationJSONObject;
        return this;
    }
    public Nctsc404ApplicationJson nctsc404ApplicationJSONObject;
    public NctscResponse withNctsc404ApplicationJsonObject(Nctsc404ApplicationJson nctsc404ApplicationJSONObject) {
        this.nctsc404ApplicationJSONObject = nctsc404ApplicationJSONObject;
        return this;
    }
    public Nctsc500ApplicationJson nctsc500ApplicationJSONObject;
    public NctscResponse withNctsc500ApplicationJsonObject(Nctsc500ApplicationJson nctsc500ApplicationJSONObject) {
        this.nctsc500ApplicationJSONObject = nctsc500ApplicationJSONObject;
        return this;
    }
    public Nctsc502ApplicationJson nctsc502ApplicationJSONObject;
    public NctscResponse withNctsc502ApplicationJsonObject(Nctsc502ApplicationJson nctsc502ApplicationJSONObject) {
        this.nctsc502ApplicationJSONObject = nctsc502ApplicationJSONObject;
        return this;
    }
    public Nctsc503ApplicationJson nctsc503ApplicationJSONObject;
    public NctscResponse withNctsc503ApplicationJsonObject(Nctsc503ApplicationJson nctsc503ApplicationJSONObject) {
        this.nctsc503ApplicationJSONObject = nctsc503ApplicationJSONObject;
        return this;
    }
    public Nctsc504ApplicationJson nctsc504ApplicationJSONObject;
    public NctscResponse withNctsc504ApplicationJsonObject(Nctsc504ApplicationJson nctsc504ApplicationJSONObject) {
        this.nctsc504ApplicationJSONObject = nctsc504ApplicationJSONObject;
        return this;
    }
}