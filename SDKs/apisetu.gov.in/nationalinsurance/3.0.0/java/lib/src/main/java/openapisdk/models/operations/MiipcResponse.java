package openapisdk.models.operations;



public class MiipcResponse {
    public String contentType;
    public MiipcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MiipcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Miipc400ApplicationJson miipc400ApplicationJSONObject;
    public MiipcResponse withMiipc400ApplicationJsonObject(Miipc400ApplicationJson miipc400ApplicationJSONObject) {
        this.miipc400ApplicationJSONObject = miipc400ApplicationJSONObject;
        return this;
    }
    public Miipc401ApplicationJson miipc401ApplicationJSONObject;
    public MiipcResponse withMiipc401ApplicationJsonObject(Miipc401ApplicationJson miipc401ApplicationJSONObject) {
        this.miipc401ApplicationJSONObject = miipc401ApplicationJSONObject;
        return this;
    }
    public Miipc404ApplicationJson miipc404ApplicationJSONObject;
    public MiipcResponse withMiipc404ApplicationJsonObject(Miipc404ApplicationJson miipc404ApplicationJSONObject) {
        this.miipc404ApplicationJSONObject = miipc404ApplicationJSONObject;
        return this;
    }
    public Miipc500ApplicationJson miipc500ApplicationJSONObject;
    public MiipcResponse withMiipc500ApplicationJsonObject(Miipc500ApplicationJson miipc500ApplicationJSONObject) {
        this.miipc500ApplicationJSONObject = miipc500ApplicationJSONObject;
        return this;
    }
    public Miipc502ApplicationJson miipc502ApplicationJSONObject;
    public MiipcResponse withMiipc502ApplicationJsonObject(Miipc502ApplicationJson miipc502ApplicationJSONObject) {
        this.miipc502ApplicationJSONObject = miipc502ApplicationJSONObject;
        return this;
    }
    public Miipc503ApplicationJson miipc503ApplicationJSONObject;
    public MiipcResponse withMiipc503ApplicationJsonObject(Miipc503ApplicationJson miipc503ApplicationJSONObject) {
        this.miipc503ApplicationJSONObject = miipc503ApplicationJSONObject;
        return this;
    }
    public Miipc504ApplicationJson miipc504ApplicationJSONObject;
    public MiipcResponse withMiipc504ApplicationJsonObject(Miipc504ApplicationJson miipc504ApplicationJSONObject) {
        this.miipc504ApplicationJSONObject = miipc504ApplicationJSONObject;
        return this;
    }
}