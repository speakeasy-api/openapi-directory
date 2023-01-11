package openapisdk.models.operations;



public class HmipcResponse {
    public String contentType;
    public HmipcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HmipcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Hmipc400ApplicationJson hmipc400ApplicationJSONObject;
    public HmipcResponse withHmipc400ApplicationJsonObject(Hmipc400ApplicationJson hmipc400ApplicationJSONObject) {
        this.hmipc400ApplicationJSONObject = hmipc400ApplicationJSONObject;
        return this;
    }
    public Hmipc401ApplicationJson hmipc401ApplicationJSONObject;
    public HmipcResponse withHmipc401ApplicationJsonObject(Hmipc401ApplicationJson hmipc401ApplicationJSONObject) {
        this.hmipc401ApplicationJSONObject = hmipc401ApplicationJSONObject;
        return this;
    }
    public Hmipc404ApplicationJson hmipc404ApplicationJSONObject;
    public HmipcResponse withHmipc404ApplicationJsonObject(Hmipc404ApplicationJson hmipc404ApplicationJSONObject) {
        this.hmipc404ApplicationJSONObject = hmipc404ApplicationJSONObject;
        return this;
    }
    public Hmipc500ApplicationJson hmipc500ApplicationJSONObject;
    public HmipcResponse withHmipc500ApplicationJsonObject(Hmipc500ApplicationJson hmipc500ApplicationJSONObject) {
        this.hmipc500ApplicationJSONObject = hmipc500ApplicationJSONObject;
        return this;
    }
    public Hmipc502ApplicationJson hmipc502ApplicationJSONObject;
    public HmipcResponse withHmipc502ApplicationJsonObject(Hmipc502ApplicationJson hmipc502ApplicationJSONObject) {
        this.hmipc502ApplicationJSONObject = hmipc502ApplicationJSONObject;
        return this;
    }
    public Hmipc503ApplicationJson hmipc503ApplicationJSONObject;
    public HmipcResponse withHmipc503ApplicationJsonObject(Hmipc503ApplicationJson hmipc503ApplicationJSONObject) {
        this.hmipc503ApplicationJSONObject = hmipc503ApplicationJSONObject;
        return this;
    }
    public Hmipc504ApplicationJson hmipc504ApplicationJSONObject;
    public HmipcResponse withHmipc504ApplicationJsonObject(Hmipc504ApplicationJson hmipc504ApplicationJSONObject) {
        this.hmipc504ApplicationJSONObject = hmipc504ApplicationJSONObject;
        return this;
    }
}