package openapisdk.models.operations;



public class BpcerResponse {
    public String contentType;
    public BpcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BpcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Bpcer400ApplicationJson bpcer400ApplicationJSONObject;
    public BpcerResponse withBpcer400ApplicationJsonObject(Bpcer400ApplicationJson bpcer400ApplicationJSONObject) {
        this.bpcer400ApplicationJSONObject = bpcer400ApplicationJSONObject;
        return this;
    }
    public Bpcer401ApplicationJson bpcer401ApplicationJSONObject;
    public BpcerResponse withBpcer401ApplicationJsonObject(Bpcer401ApplicationJson bpcer401ApplicationJSONObject) {
        this.bpcer401ApplicationJSONObject = bpcer401ApplicationJSONObject;
        return this;
    }
    public Bpcer404ApplicationJson bpcer404ApplicationJSONObject;
    public BpcerResponse withBpcer404ApplicationJsonObject(Bpcer404ApplicationJson bpcer404ApplicationJSONObject) {
        this.bpcer404ApplicationJSONObject = bpcer404ApplicationJSONObject;
        return this;
    }
    public Bpcer500ApplicationJson bpcer500ApplicationJSONObject;
    public BpcerResponse withBpcer500ApplicationJsonObject(Bpcer500ApplicationJson bpcer500ApplicationJSONObject) {
        this.bpcer500ApplicationJSONObject = bpcer500ApplicationJSONObject;
        return this;
    }
    public Bpcer502ApplicationJson bpcer502ApplicationJSONObject;
    public BpcerResponse withBpcer502ApplicationJsonObject(Bpcer502ApplicationJson bpcer502ApplicationJSONObject) {
        this.bpcer502ApplicationJSONObject = bpcer502ApplicationJSONObject;
        return this;
    }
    public Bpcer503ApplicationJson bpcer503ApplicationJSONObject;
    public BpcerResponse withBpcer503ApplicationJsonObject(Bpcer503ApplicationJson bpcer503ApplicationJSONObject) {
        this.bpcer503ApplicationJSONObject = bpcer503ApplicationJSONObject;
        return this;
    }
    public Bpcer504ApplicationJson bpcer504ApplicationJSONObject;
    public BpcerResponse withBpcer504ApplicationJsonObject(Bpcer504ApplicationJson bpcer504ApplicationJSONObject) {
        this.bpcer504ApplicationJSONObject = bpcer504ApplicationJSONObject;
        return this;
    }
}