package openapisdk.models.operations;



public class MrcerResponse {
    public String contentType;
    public MrcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MrcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Mrcer400ApplicationJson mrcer400ApplicationJSONObject;
    public MrcerResponse withMrcer400ApplicationJsonObject(Mrcer400ApplicationJson mrcer400ApplicationJSONObject) {
        this.mrcer400ApplicationJSONObject = mrcer400ApplicationJSONObject;
        return this;
    }
    public Mrcer401ApplicationJson mrcer401ApplicationJSONObject;
    public MrcerResponse withMrcer401ApplicationJsonObject(Mrcer401ApplicationJson mrcer401ApplicationJSONObject) {
        this.mrcer401ApplicationJSONObject = mrcer401ApplicationJSONObject;
        return this;
    }
    public Mrcer404ApplicationJson mrcer404ApplicationJSONObject;
    public MrcerResponse withMrcer404ApplicationJsonObject(Mrcer404ApplicationJson mrcer404ApplicationJSONObject) {
        this.mrcer404ApplicationJSONObject = mrcer404ApplicationJSONObject;
        return this;
    }
    public Mrcer500ApplicationJson mrcer500ApplicationJSONObject;
    public MrcerResponse withMrcer500ApplicationJsonObject(Mrcer500ApplicationJson mrcer500ApplicationJSONObject) {
        this.mrcer500ApplicationJSONObject = mrcer500ApplicationJSONObject;
        return this;
    }
    public Mrcer502ApplicationJson mrcer502ApplicationJSONObject;
    public MrcerResponse withMrcer502ApplicationJsonObject(Mrcer502ApplicationJson mrcer502ApplicationJSONObject) {
        this.mrcer502ApplicationJSONObject = mrcer502ApplicationJSONObject;
        return this;
    }
    public Mrcer503ApplicationJson mrcer503ApplicationJSONObject;
    public MrcerResponse withMrcer503ApplicationJsonObject(Mrcer503ApplicationJson mrcer503ApplicationJSONObject) {
        this.mrcer503ApplicationJSONObject = mrcer503ApplicationJSONObject;
        return this;
    }
    public Mrcer504ApplicationJson mrcer504ApplicationJSONObject;
    public MrcerResponse withMrcer504ApplicationJsonObject(Mrcer504ApplicationJson mrcer504ApplicationJSONObject) {
        this.mrcer504ApplicationJSONObject = mrcer504ApplicationJSONObject;
        return this;
    }
}