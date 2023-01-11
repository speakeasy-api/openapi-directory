package openapisdk.models.operations;



public class SkhscResponse {
    public String contentType;
    public SkhscResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SkhscResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Skhsc400ApplicationJson skhsc400ApplicationJSONObject;
    public SkhscResponse withSkhsc400ApplicationJsonObject(Skhsc400ApplicationJson skhsc400ApplicationJSONObject) {
        this.skhsc400ApplicationJSONObject = skhsc400ApplicationJSONObject;
        return this;
    }
    public Skhsc401ApplicationJson skhsc401ApplicationJSONObject;
    public SkhscResponse withSkhsc401ApplicationJsonObject(Skhsc401ApplicationJson skhsc401ApplicationJSONObject) {
        this.skhsc401ApplicationJSONObject = skhsc401ApplicationJSONObject;
        return this;
    }
    public Skhsc404ApplicationJson skhsc404ApplicationJSONObject;
    public SkhscResponse withSkhsc404ApplicationJsonObject(Skhsc404ApplicationJson skhsc404ApplicationJSONObject) {
        this.skhsc404ApplicationJSONObject = skhsc404ApplicationJSONObject;
        return this;
    }
    public Skhsc500ApplicationJson skhsc500ApplicationJSONObject;
    public SkhscResponse withSkhsc500ApplicationJsonObject(Skhsc500ApplicationJson skhsc500ApplicationJSONObject) {
        this.skhsc500ApplicationJSONObject = skhsc500ApplicationJSONObject;
        return this;
    }
    public Skhsc502ApplicationJson skhsc502ApplicationJSONObject;
    public SkhscResponse withSkhsc502ApplicationJsonObject(Skhsc502ApplicationJson skhsc502ApplicationJSONObject) {
        this.skhsc502ApplicationJSONObject = skhsc502ApplicationJSONObject;
        return this;
    }
    public Skhsc503ApplicationJson skhsc503ApplicationJSONObject;
    public SkhscResponse withSkhsc503ApplicationJsonObject(Skhsc503ApplicationJson skhsc503ApplicationJSONObject) {
        this.skhsc503ApplicationJSONObject = skhsc503ApplicationJSONObject;
        return this;
    }
    public Skhsc504ApplicationJson skhsc504ApplicationJSONObject;
    public SkhscResponse withSkhsc504ApplicationJsonObject(Skhsc504ApplicationJson skhsc504ApplicationJSONObject) {
        this.skhsc504ApplicationJSONObject = skhsc504ApplicationJSONObject;
        return this;
    }
}