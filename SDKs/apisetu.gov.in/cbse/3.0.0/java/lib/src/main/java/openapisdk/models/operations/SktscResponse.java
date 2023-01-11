package openapisdk.models.operations;



public class SktscResponse {
    public String contentType;
    public SktscResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SktscResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Sktsc400ApplicationJson sktsc400ApplicationJSONObject;
    public SktscResponse withSktsc400ApplicationJsonObject(Sktsc400ApplicationJson sktsc400ApplicationJSONObject) {
        this.sktsc400ApplicationJSONObject = sktsc400ApplicationJSONObject;
        return this;
    }
    public Sktsc401ApplicationJson sktsc401ApplicationJSONObject;
    public SktscResponse withSktsc401ApplicationJsonObject(Sktsc401ApplicationJson sktsc401ApplicationJSONObject) {
        this.sktsc401ApplicationJSONObject = sktsc401ApplicationJSONObject;
        return this;
    }
    public Sktsc404ApplicationJson sktsc404ApplicationJSONObject;
    public SktscResponse withSktsc404ApplicationJsonObject(Sktsc404ApplicationJson sktsc404ApplicationJSONObject) {
        this.sktsc404ApplicationJSONObject = sktsc404ApplicationJSONObject;
        return this;
    }
    public Sktsc500ApplicationJson sktsc500ApplicationJSONObject;
    public SktscResponse withSktsc500ApplicationJsonObject(Sktsc500ApplicationJson sktsc500ApplicationJSONObject) {
        this.sktsc500ApplicationJSONObject = sktsc500ApplicationJSONObject;
        return this;
    }
    public Sktsc502ApplicationJson sktsc502ApplicationJSONObject;
    public SktscResponse withSktsc502ApplicationJsonObject(Sktsc502ApplicationJson sktsc502ApplicationJSONObject) {
        this.sktsc502ApplicationJSONObject = sktsc502ApplicationJSONObject;
        return this;
    }
    public Sktsc503ApplicationJson sktsc503ApplicationJSONObject;
    public SktscResponse withSktsc503ApplicationJsonObject(Sktsc503ApplicationJson sktsc503ApplicationJSONObject) {
        this.sktsc503ApplicationJSONObject = sktsc503ApplicationJSONObject;
        return this;
    }
    public Sktsc504ApplicationJson sktsc504ApplicationJSONObject;
    public SktscResponse withSktsc504ApplicationJsonObject(Sktsc504ApplicationJson sktsc504ApplicationJSONObject) {
        this.sktsc504ApplicationJSONObject = sktsc504ApplicationJSONObject;
        return this;
    }
}