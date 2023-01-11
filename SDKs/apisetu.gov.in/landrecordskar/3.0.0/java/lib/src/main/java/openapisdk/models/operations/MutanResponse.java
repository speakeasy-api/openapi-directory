package openapisdk.models.operations;



public class MutanResponse {
    public byte[] body;
    public MutanResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MutanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MutanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Mutan400ApplicationJson mutan400ApplicationJSONObject;
    public MutanResponse withMutan400ApplicationJsonObject(Mutan400ApplicationJson mutan400ApplicationJSONObject) {
        this.mutan400ApplicationJSONObject = mutan400ApplicationJSONObject;
        return this;
    }
    public Mutan401ApplicationJson mutan401ApplicationJSONObject;
    public MutanResponse withMutan401ApplicationJsonObject(Mutan401ApplicationJson mutan401ApplicationJSONObject) {
        this.mutan401ApplicationJSONObject = mutan401ApplicationJSONObject;
        return this;
    }
    public Mutan404ApplicationJson mutan404ApplicationJSONObject;
    public MutanResponse withMutan404ApplicationJsonObject(Mutan404ApplicationJson mutan404ApplicationJSONObject) {
        this.mutan404ApplicationJSONObject = mutan404ApplicationJSONObject;
        return this;
    }
    public Mutan500ApplicationJson mutan500ApplicationJSONObject;
    public MutanResponse withMutan500ApplicationJsonObject(Mutan500ApplicationJson mutan500ApplicationJSONObject) {
        this.mutan500ApplicationJSONObject = mutan500ApplicationJSONObject;
        return this;
    }
    public Mutan502ApplicationJson mutan502ApplicationJSONObject;
    public MutanResponse withMutan502ApplicationJsonObject(Mutan502ApplicationJson mutan502ApplicationJSONObject) {
        this.mutan502ApplicationJSONObject = mutan502ApplicationJSONObject;
        return this;
    }
    public Mutan503ApplicationJson mutan503ApplicationJSONObject;
    public MutanResponse withMutan503ApplicationJsonObject(Mutan503ApplicationJson mutan503ApplicationJSONObject) {
        this.mutan503ApplicationJSONObject = mutan503ApplicationJSONObject;
        return this;
    }
    public Mutan504ApplicationJson mutan504ApplicationJSONObject;
    public MutanResponse withMutan504ApplicationJsonObject(Mutan504ApplicationJson mutan504ApplicationJSONObject) {
        this.mutan504ApplicationJSONObject = mutan504ApplicationJSONObject;
        return this;
    }
}