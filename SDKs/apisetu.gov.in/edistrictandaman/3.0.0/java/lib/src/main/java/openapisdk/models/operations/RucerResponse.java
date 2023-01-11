package openapisdk.models.operations;



public class RucerResponse {
    public String contentType;
    public RucerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RucerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Rucer400ApplicationJson rucer400ApplicationJSONObject;
    public RucerResponse withRucer400ApplicationJsonObject(Rucer400ApplicationJson rucer400ApplicationJSONObject) {
        this.rucer400ApplicationJSONObject = rucer400ApplicationJSONObject;
        return this;
    }
    public Rucer401ApplicationJson rucer401ApplicationJSONObject;
    public RucerResponse withRucer401ApplicationJsonObject(Rucer401ApplicationJson rucer401ApplicationJSONObject) {
        this.rucer401ApplicationJSONObject = rucer401ApplicationJSONObject;
        return this;
    }
    public Rucer404ApplicationJson rucer404ApplicationJSONObject;
    public RucerResponse withRucer404ApplicationJsonObject(Rucer404ApplicationJson rucer404ApplicationJSONObject) {
        this.rucer404ApplicationJSONObject = rucer404ApplicationJSONObject;
        return this;
    }
    public Rucer500ApplicationJson rucer500ApplicationJSONObject;
    public RucerResponse withRucer500ApplicationJsonObject(Rucer500ApplicationJson rucer500ApplicationJSONObject) {
        this.rucer500ApplicationJSONObject = rucer500ApplicationJSONObject;
        return this;
    }
    public Rucer502ApplicationJson rucer502ApplicationJSONObject;
    public RucerResponse withRucer502ApplicationJsonObject(Rucer502ApplicationJson rucer502ApplicationJSONObject) {
        this.rucer502ApplicationJSONObject = rucer502ApplicationJSONObject;
        return this;
    }
    public Rucer503ApplicationJson rucer503ApplicationJSONObject;
    public RucerResponse withRucer503ApplicationJsonObject(Rucer503ApplicationJson rucer503ApplicationJSONObject) {
        this.rucer503ApplicationJSONObject = rucer503ApplicationJSONObject;
        return this;
    }
    public Rucer504ApplicationJson rucer504ApplicationJSONObject;
    public RucerResponse withRucer504ApplicationJsonObject(Rucer504ApplicationJson rucer504ApplicationJSONObject) {
        this.rucer504ApplicationJSONObject = rucer504ApplicationJSONObject;
        return this;
    }
}