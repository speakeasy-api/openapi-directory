package openapisdk.models.operations;



public class PsprtResponse {
    public String contentType;
    public PsprtResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PsprtResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Psprt400ApplicationJson psprt400ApplicationJSONObject;
    public PsprtResponse withPsprt400ApplicationJsonObject(Psprt400ApplicationJson psprt400ApplicationJSONObject) {
        this.psprt400ApplicationJSONObject = psprt400ApplicationJSONObject;
        return this;
    }
    public Psprt401ApplicationJson psprt401ApplicationJSONObject;
    public PsprtResponse withPsprt401ApplicationJsonObject(Psprt401ApplicationJson psprt401ApplicationJSONObject) {
        this.psprt401ApplicationJSONObject = psprt401ApplicationJSONObject;
        return this;
    }
    public Psprt404ApplicationJson psprt404ApplicationJSONObject;
    public PsprtResponse withPsprt404ApplicationJsonObject(Psprt404ApplicationJson psprt404ApplicationJSONObject) {
        this.psprt404ApplicationJSONObject = psprt404ApplicationJSONObject;
        return this;
    }
    public Psprt500ApplicationJson psprt500ApplicationJSONObject;
    public PsprtResponse withPsprt500ApplicationJsonObject(Psprt500ApplicationJson psprt500ApplicationJSONObject) {
        this.psprt500ApplicationJSONObject = psprt500ApplicationJSONObject;
        return this;
    }
    public Psprt502ApplicationJson psprt502ApplicationJSONObject;
    public PsprtResponse withPsprt502ApplicationJsonObject(Psprt502ApplicationJson psprt502ApplicationJSONObject) {
        this.psprt502ApplicationJSONObject = psprt502ApplicationJSONObject;
        return this;
    }
    public Psprt503ApplicationJson psprt503ApplicationJSONObject;
    public PsprtResponse withPsprt503ApplicationJsonObject(Psprt503ApplicationJson psprt503ApplicationJSONObject) {
        this.psprt503ApplicationJSONObject = psprt503ApplicationJSONObject;
        return this;
    }
    public Psprt504ApplicationJson psprt504ApplicationJSONObject;
    public PsprtResponse withPsprt504ApplicationJsonObject(Psprt504ApplicationJson psprt504ApplicationJSONObject) {
        this.psprt504ApplicationJSONObject = psprt504ApplicationJSONObject;
        return this;
    }
}