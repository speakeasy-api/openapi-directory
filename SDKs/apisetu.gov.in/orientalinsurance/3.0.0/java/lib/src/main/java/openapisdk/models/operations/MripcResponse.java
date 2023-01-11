package openapisdk.models.operations;



public class MripcResponse {
    public String contentType;
    public MripcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MripcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Mripc400ApplicationJson mripc400ApplicationJSONObject;
    public MripcResponse withMripc400ApplicationJsonObject(Mripc400ApplicationJson mripc400ApplicationJSONObject) {
        this.mripc400ApplicationJSONObject = mripc400ApplicationJSONObject;
        return this;
    }
    public Mripc401ApplicationJson mripc401ApplicationJSONObject;
    public MripcResponse withMripc401ApplicationJsonObject(Mripc401ApplicationJson mripc401ApplicationJSONObject) {
        this.mripc401ApplicationJSONObject = mripc401ApplicationJSONObject;
        return this;
    }
    public Mripc404ApplicationJson mripc404ApplicationJSONObject;
    public MripcResponse withMripc404ApplicationJsonObject(Mripc404ApplicationJson mripc404ApplicationJSONObject) {
        this.mripc404ApplicationJSONObject = mripc404ApplicationJSONObject;
        return this;
    }
    public Mripc500ApplicationJson mripc500ApplicationJSONObject;
    public MripcResponse withMripc500ApplicationJsonObject(Mripc500ApplicationJson mripc500ApplicationJSONObject) {
        this.mripc500ApplicationJSONObject = mripc500ApplicationJSONObject;
        return this;
    }
    public Mripc502ApplicationJson mripc502ApplicationJSONObject;
    public MripcResponse withMripc502ApplicationJsonObject(Mripc502ApplicationJson mripc502ApplicationJSONObject) {
        this.mripc502ApplicationJSONObject = mripc502ApplicationJSONObject;
        return this;
    }
    public Mripc503ApplicationJson mripc503ApplicationJSONObject;
    public MripcResponse withMripc503ApplicationJsonObject(Mripc503ApplicationJson mripc503ApplicationJSONObject) {
        this.mripc503ApplicationJSONObject = mripc503ApplicationJSONObject;
        return this;
    }
    public Mripc504ApplicationJson mripc504ApplicationJSONObject;
    public MripcResponse withMripc504ApplicationJsonObject(Mripc504ApplicationJson mripc504ApplicationJSONObject) {
        this.mripc504ApplicationJSONObject = mripc504ApplicationJSONObject;
        return this;
    }
}