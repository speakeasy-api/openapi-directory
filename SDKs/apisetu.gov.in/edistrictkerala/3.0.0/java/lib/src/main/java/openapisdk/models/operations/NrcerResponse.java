package openapisdk.models.operations;



public class NrcerResponse {
    public String contentType;
    public NrcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NrcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Nrcer400ApplicationJson nrcer400ApplicationJSONObject;
    public NrcerResponse withNrcer400ApplicationJsonObject(Nrcer400ApplicationJson nrcer400ApplicationJSONObject) {
        this.nrcer400ApplicationJSONObject = nrcer400ApplicationJSONObject;
        return this;
    }
    public Nrcer401ApplicationJson nrcer401ApplicationJSONObject;
    public NrcerResponse withNrcer401ApplicationJsonObject(Nrcer401ApplicationJson nrcer401ApplicationJSONObject) {
        this.nrcer401ApplicationJSONObject = nrcer401ApplicationJSONObject;
        return this;
    }
    public Nrcer404ApplicationJson nrcer404ApplicationJSONObject;
    public NrcerResponse withNrcer404ApplicationJsonObject(Nrcer404ApplicationJson nrcer404ApplicationJSONObject) {
        this.nrcer404ApplicationJSONObject = nrcer404ApplicationJSONObject;
        return this;
    }
    public Nrcer500ApplicationJson nrcer500ApplicationJSONObject;
    public NrcerResponse withNrcer500ApplicationJsonObject(Nrcer500ApplicationJson nrcer500ApplicationJSONObject) {
        this.nrcer500ApplicationJSONObject = nrcer500ApplicationJSONObject;
        return this;
    }
    public Nrcer502ApplicationJson nrcer502ApplicationJSONObject;
    public NrcerResponse withNrcer502ApplicationJsonObject(Nrcer502ApplicationJson nrcer502ApplicationJSONObject) {
        this.nrcer502ApplicationJSONObject = nrcer502ApplicationJSONObject;
        return this;
    }
    public Nrcer503ApplicationJson nrcer503ApplicationJSONObject;
    public NrcerResponse withNrcer503ApplicationJsonObject(Nrcer503ApplicationJson nrcer503ApplicationJSONObject) {
        this.nrcer503ApplicationJSONObject = nrcer503ApplicationJSONObject;
        return this;
    }
    public Nrcer504ApplicationJson nrcer504ApplicationJSONObject;
    public NrcerResponse withNrcer504ApplicationJsonObject(Nrcer504ApplicationJson nrcer504ApplicationJSONObject) {
        this.nrcer504ApplicationJSONObject = nrcer504ApplicationJSONObject;
        return this;
    }
}