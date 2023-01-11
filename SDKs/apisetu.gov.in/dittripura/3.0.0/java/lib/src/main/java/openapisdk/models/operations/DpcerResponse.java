package openapisdk.models.operations;



public class DpcerResponse {
    public String contentType;
    public DpcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DpcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Dpcer400ApplicationJson dpcer400ApplicationJSONObject;
    public DpcerResponse withDpcer400ApplicationJsonObject(Dpcer400ApplicationJson dpcer400ApplicationJSONObject) {
        this.dpcer400ApplicationJSONObject = dpcer400ApplicationJSONObject;
        return this;
    }
    public Dpcer401ApplicationJson dpcer401ApplicationJSONObject;
    public DpcerResponse withDpcer401ApplicationJsonObject(Dpcer401ApplicationJson dpcer401ApplicationJSONObject) {
        this.dpcer401ApplicationJSONObject = dpcer401ApplicationJSONObject;
        return this;
    }
    public Dpcer404ApplicationJson dpcer404ApplicationJSONObject;
    public DpcerResponse withDpcer404ApplicationJsonObject(Dpcer404ApplicationJson dpcer404ApplicationJSONObject) {
        this.dpcer404ApplicationJSONObject = dpcer404ApplicationJSONObject;
        return this;
    }
    public Dpcer500ApplicationJson dpcer500ApplicationJSONObject;
    public DpcerResponse withDpcer500ApplicationJsonObject(Dpcer500ApplicationJson dpcer500ApplicationJSONObject) {
        this.dpcer500ApplicationJSONObject = dpcer500ApplicationJSONObject;
        return this;
    }
    public Dpcer502ApplicationJson dpcer502ApplicationJSONObject;
    public DpcerResponse withDpcer502ApplicationJsonObject(Dpcer502ApplicationJson dpcer502ApplicationJSONObject) {
        this.dpcer502ApplicationJSONObject = dpcer502ApplicationJSONObject;
        return this;
    }
    public Dpcer503ApplicationJson dpcer503ApplicationJSONObject;
    public DpcerResponse withDpcer503ApplicationJsonObject(Dpcer503ApplicationJson dpcer503ApplicationJSONObject) {
        this.dpcer503ApplicationJSONObject = dpcer503ApplicationJSONObject;
        return this;
    }
    public Dpcer504ApplicationJson dpcer504ApplicationJSONObject;
    public DpcerResponse withDpcer504ApplicationJsonObject(Dpcer504ApplicationJson dpcer504ApplicationJSONObject) {
        this.dpcer504ApplicationJSONObject = dpcer504ApplicationJSONObject;
        return this;
    }
}