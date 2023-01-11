package openapisdk.models.operations;



public class TpcerResponse {
    public String contentType;
    public TpcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TpcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Tpcer400ApplicationJson tpcer400ApplicationJSONObject;
    public TpcerResponse withTpcer400ApplicationJsonObject(Tpcer400ApplicationJson tpcer400ApplicationJSONObject) {
        this.tpcer400ApplicationJSONObject = tpcer400ApplicationJSONObject;
        return this;
    }
    public Tpcer401ApplicationJson tpcer401ApplicationJSONObject;
    public TpcerResponse withTpcer401ApplicationJsonObject(Tpcer401ApplicationJson tpcer401ApplicationJSONObject) {
        this.tpcer401ApplicationJSONObject = tpcer401ApplicationJSONObject;
        return this;
    }
    public Tpcer404ApplicationJson tpcer404ApplicationJSONObject;
    public TpcerResponse withTpcer404ApplicationJsonObject(Tpcer404ApplicationJson tpcer404ApplicationJSONObject) {
        this.tpcer404ApplicationJSONObject = tpcer404ApplicationJSONObject;
        return this;
    }
    public Tpcer500ApplicationJson tpcer500ApplicationJSONObject;
    public TpcerResponse withTpcer500ApplicationJsonObject(Tpcer500ApplicationJson tpcer500ApplicationJSONObject) {
        this.tpcer500ApplicationJSONObject = tpcer500ApplicationJSONObject;
        return this;
    }
    public Tpcer502ApplicationJson tpcer502ApplicationJSONObject;
    public TpcerResponse withTpcer502ApplicationJsonObject(Tpcer502ApplicationJson tpcer502ApplicationJSONObject) {
        this.tpcer502ApplicationJSONObject = tpcer502ApplicationJSONObject;
        return this;
    }
    public Tpcer503ApplicationJson tpcer503ApplicationJSONObject;
    public TpcerResponse withTpcer503ApplicationJsonObject(Tpcer503ApplicationJson tpcer503ApplicationJSONObject) {
        this.tpcer503ApplicationJSONObject = tpcer503ApplicationJSONObject;
        return this;
    }
    public Tpcer504ApplicationJson tpcer504ApplicationJSONObject;
    public TpcerResponse withTpcer504ApplicationJsonObject(Tpcer504ApplicationJson tpcer504ApplicationJSONObject) {
        this.tpcer504ApplicationJSONObject = tpcer504ApplicationJSONObject;
        return this;
    }
}