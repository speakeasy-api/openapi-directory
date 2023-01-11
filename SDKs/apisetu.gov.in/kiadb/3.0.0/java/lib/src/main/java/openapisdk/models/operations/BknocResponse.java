package openapisdk.models.operations;



public class BknocResponse {
    public String contentType;
    public BknocResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BknocResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Bknoc400ApplicationJson bknoc400ApplicationJSONObject;
    public BknocResponse withBknoc400ApplicationJsonObject(Bknoc400ApplicationJson bknoc400ApplicationJSONObject) {
        this.bknoc400ApplicationJSONObject = bknoc400ApplicationJSONObject;
        return this;
    }
    public Bknoc401ApplicationJson bknoc401ApplicationJSONObject;
    public BknocResponse withBknoc401ApplicationJsonObject(Bknoc401ApplicationJson bknoc401ApplicationJSONObject) {
        this.bknoc401ApplicationJSONObject = bknoc401ApplicationJSONObject;
        return this;
    }
    public Bknoc404ApplicationJson bknoc404ApplicationJSONObject;
    public BknocResponse withBknoc404ApplicationJsonObject(Bknoc404ApplicationJson bknoc404ApplicationJSONObject) {
        this.bknoc404ApplicationJSONObject = bknoc404ApplicationJSONObject;
        return this;
    }
    public Bknoc500ApplicationJson bknoc500ApplicationJSONObject;
    public BknocResponse withBknoc500ApplicationJsonObject(Bknoc500ApplicationJson bknoc500ApplicationJSONObject) {
        this.bknoc500ApplicationJSONObject = bknoc500ApplicationJSONObject;
        return this;
    }
    public Bknoc502ApplicationJson bknoc502ApplicationJSONObject;
    public BknocResponse withBknoc502ApplicationJsonObject(Bknoc502ApplicationJson bknoc502ApplicationJSONObject) {
        this.bknoc502ApplicationJSONObject = bknoc502ApplicationJSONObject;
        return this;
    }
    public Bknoc503ApplicationJson bknoc503ApplicationJSONObject;
    public BknocResponse withBknoc503ApplicationJsonObject(Bknoc503ApplicationJson bknoc503ApplicationJSONObject) {
        this.bknoc503ApplicationJSONObject = bknoc503ApplicationJSONObject;
        return this;
    }
    public Bknoc504ApplicationJson bknoc504ApplicationJSONObject;
    public BknocResponse withBknoc504ApplicationJsonObject(Bknoc504ApplicationJson bknoc504ApplicationJSONObject) {
        this.bknoc504ApplicationJSONObject = bknoc504ApplicationJSONObject;
        return this;
    }
}