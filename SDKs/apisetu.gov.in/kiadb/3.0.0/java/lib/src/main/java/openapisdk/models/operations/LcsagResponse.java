package openapisdk.models.operations;



public class LcsagResponse {
    public String contentType;
    public LcsagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LcsagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Lcsag400ApplicationJson lcsag400ApplicationJSONObject;
    public LcsagResponse withLcsag400ApplicationJsonObject(Lcsag400ApplicationJson lcsag400ApplicationJSONObject) {
        this.lcsag400ApplicationJSONObject = lcsag400ApplicationJSONObject;
        return this;
    }
    public Lcsag401ApplicationJson lcsag401ApplicationJSONObject;
    public LcsagResponse withLcsag401ApplicationJsonObject(Lcsag401ApplicationJson lcsag401ApplicationJSONObject) {
        this.lcsag401ApplicationJSONObject = lcsag401ApplicationJSONObject;
        return this;
    }
    public Lcsag404ApplicationJson lcsag404ApplicationJSONObject;
    public LcsagResponse withLcsag404ApplicationJsonObject(Lcsag404ApplicationJson lcsag404ApplicationJSONObject) {
        this.lcsag404ApplicationJSONObject = lcsag404ApplicationJSONObject;
        return this;
    }
    public Lcsag500ApplicationJson lcsag500ApplicationJSONObject;
    public LcsagResponse withLcsag500ApplicationJsonObject(Lcsag500ApplicationJson lcsag500ApplicationJSONObject) {
        this.lcsag500ApplicationJSONObject = lcsag500ApplicationJSONObject;
        return this;
    }
    public Lcsag502ApplicationJson lcsag502ApplicationJSONObject;
    public LcsagResponse withLcsag502ApplicationJsonObject(Lcsag502ApplicationJson lcsag502ApplicationJSONObject) {
        this.lcsag502ApplicationJSONObject = lcsag502ApplicationJSONObject;
        return this;
    }
    public Lcsag503ApplicationJson lcsag503ApplicationJSONObject;
    public LcsagResponse withLcsag503ApplicationJsonObject(Lcsag503ApplicationJson lcsag503ApplicationJSONObject) {
        this.lcsag503ApplicationJSONObject = lcsag503ApplicationJSONObject;
        return this;
    }
    public Lcsag504ApplicationJson lcsag504ApplicationJSONObject;
    public LcsagResponse withLcsag504ApplicationJsonObject(Lcsag504ApplicationJson lcsag504ApplicationJSONObject) {
        this.lcsag504ApplicationJSONObject = lcsag504ApplicationJSONObject;
        return this;
    }
}