package openapisdk.models.operations;



public class EgcerResponse {
    public String contentType;
    public EgcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EgcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Egcer400ApplicationJson egcer400ApplicationJSONObject;
    public EgcerResponse withEgcer400ApplicationJsonObject(Egcer400ApplicationJson egcer400ApplicationJSONObject) {
        this.egcer400ApplicationJSONObject = egcer400ApplicationJSONObject;
        return this;
    }
    public Egcer401ApplicationJson egcer401ApplicationJSONObject;
    public EgcerResponse withEgcer401ApplicationJsonObject(Egcer401ApplicationJson egcer401ApplicationJSONObject) {
        this.egcer401ApplicationJSONObject = egcer401ApplicationJSONObject;
        return this;
    }
    public Egcer404ApplicationJson egcer404ApplicationJSONObject;
    public EgcerResponse withEgcer404ApplicationJsonObject(Egcer404ApplicationJson egcer404ApplicationJSONObject) {
        this.egcer404ApplicationJSONObject = egcer404ApplicationJSONObject;
        return this;
    }
    public Egcer500ApplicationJson egcer500ApplicationJSONObject;
    public EgcerResponse withEgcer500ApplicationJsonObject(Egcer500ApplicationJson egcer500ApplicationJSONObject) {
        this.egcer500ApplicationJSONObject = egcer500ApplicationJSONObject;
        return this;
    }
    public Egcer502ApplicationJson egcer502ApplicationJSONObject;
    public EgcerResponse withEgcer502ApplicationJsonObject(Egcer502ApplicationJson egcer502ApplicationJSONObject) {
        this.egcer502ApplicationJSONObject = egcer502ApplicationJSONObject;
        return this;
    }
    public Egcer503ApplicationJson egcer503ApplicationJSONObject;
    public EgcerResponse withEgcer503ApplicationJsonObject(Egcer503ApplicationJson egcer503ApplicationJSONObject) {
        this.egcer503ApplicationJSONObject = egcer503ApplicationJSONObject;
        return this;
    }
    public Egcer504ApplicationJson egcer504ApplicationJSONObject;
    public EgcerResponse withEgcer504ApplicationJsonObject(Egcer504ApplicationJson egcer504ApplicationJSONObject) {
        this.egcer504ApplicationJSONObject = egcer504ApplicationJSONObject;
        return this;
    }
}