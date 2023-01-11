package openapisdk.models.operations;



public class HlipcResponse {
    public String contentType;
    public HlipcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HlipcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Hlipc400ApplicationJson hlipc400ApplicationJSONObject;
    public HlipcResponse withHlipc400ApplicationJsonObject(Hlipc400ApplicationJson hlipc400ApplicationJSONObject) {
        this.hlipc400ApplicationJSONObject = hlipc400ApplicationJSONObject;
        return this;
    }
    public Hlipc401ApplicationJson hlipc401ApplicationJSONObject;
    public HlipcResponse withHlipc401ApplicationJsonObject(Hlipc401ApplicationJson hlipc401ApplicationJSONObject) {
        this.hlipc401ApplicationJSONObject = hlipc401ApplicationJSONObject;
        return this;
    }
    public Hlipc404ApplicationJson hlipc404ApplicationJSONObject;
    public HlipcResponse withHlipc404ApplicationJsonObject(Hlipc404ApplicationJson hlipc404ApplicationJSONObject) {
        this.hlipc404ApplicationJSONObject = hlipc404ApplicationJSONObject;
        return this;
    }
    public Hlipc500ApplicationJson hlipc500ApplicationJSONObject;
    public HlipcResponse withHlipc500ApplicationJsonObject(Hlipc500ApplicationJson hlipc500ApplicationJSONObject) {
        this.hlipc500ApplicationJSONObject = hlipc500ApplicationJSONObject;
        return this;
    }
    public Hlipc502ApplicationJson hlipc502ApplicationJSONObject;
    public HlipcResponse withHlipc502ApplicationJsonObject(Hlipc502ApplicationJson hlipc502ApplicationJSONObject) {
        this.hlipc502ApplicationJSONObject = hlipc502ApplicationJSONObject;
        return this;
    }
    public Hlipc503ApplicationJson hlipc503ApplicationJSONObject;
    public HlipcResponse withHlipc503ApplicationJsonObject(Hlipc503ApplicationJson hlipc503ApplicationJSONObject) {
        this.hlipc503ApplicationJSONObject = hlipc503ApplicationJSONObject;
        return this;
    }
    public Hlipc504ApplicationJson hlipc504ApplicationJSONObject;
    public HlipcResponse withHlipc504ApplicationJsonObject(Hlipc504ApplicationJson hlipc504ApplicationJSONObject) {
        this.hlipc504ApplicationJSONObject = hlipc504ApplicationJSONObject;
        return this;
    }
}