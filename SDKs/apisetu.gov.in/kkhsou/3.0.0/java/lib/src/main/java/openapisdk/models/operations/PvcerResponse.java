package openapisdk.models.operations;



public class PvcerResponse {
    public String contentType;
    public PvcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PvcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Pvcer400ApplicationJson pvcer400ApplicationJSONObject;
    public PvcerResponse withPvcer400ApplicationJsonObject(Pvcer400ApplicationJson pvcer400ApplicationJSONObject) {
        this.pvcer400ApplicationJSONObject = pvcer400ApplicationJSONObject;
        return this;
    }
    public Pvcer401ApplicationJson pvcer401ApplicationJSONObject;
    public PvcerResponse withPvcer401ApplicationJsonObject(Pvcer401ApplicationJson pvcer401ApplicationJSONObject) {
        this.pvcer401ApplicationJSONObject = pvcer401ApplicationJSONObject;
        return this;
    }
    public Pvcer404ApplicationJson pvcer404ApplicationJSONObject;
    public PvcerResponse withPvcer404ApplicationJsonObject(Pvcer404ApplicationJson pvcer404ApplicationJSONObject) {
        this.pvcer404ApplicationJSONObject = pvcer404ApplicationJSONObject;
        return this;
    }
    public Pvcer500ApplicationJson pvcer500ApplicationJSONObject;
    public PvcerResponse withPvcer500ApplicationJsonObject(Pvcer500ApplicationJson pvcer500ApplicationJSONObject) {
        this.pvcer500ApplicationJSONObject = pvcer500ApplicationJSONObject;
        return this;
    }
    public Pvcer502ApplicationJson pvcer502ApplicationJSONObject;
    public PvcerResponse withPvcer502ApplicationJsonObject(Pvcer502ApplicationJson pvcer502ApplicationJSONObject) {
        this.pvcer502ApplicationJSONObject = pvcer502ApplicationJSONObject;
        return this;
    }
    public Pvcer503ApplicationJson pvcer503ApplicationJSONObject;
    public PvcerResponse withPvcer503ApplicationJsonObject(Pvcer503ApplicationJson pvcer503ApplicationJSONObject) {
        this.pvcer503ApplicationJSONObject = pvcer503ApplicationJSONObject;
        return this;
    }
    public Pvcer504ApplicationJson pvcer504ApplicationJSONObject;
    public PvcerResponse withPvcer504ApplicationJsonObject(Pvcer504ApplicationJson pvcer504ApplicationJSONObject) {
        this.pvcer504ApplicationJSONObject = pvcer504ApplicationJSONObject;
        return this;
    }
}