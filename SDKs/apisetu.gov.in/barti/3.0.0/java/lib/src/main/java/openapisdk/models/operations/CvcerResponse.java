package openapisdk.models.operations;



public class CvcerResponse {
    public String contentType;
    public CvcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CvcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Cvcer400ApplicationJson cvcer400ApplicationJSONObject;
    public CvcerResponse withCvcer400ApplicationJsonObject(Cvcer400ApplicationJson cvcer400ApplicationJSONObject) {
        this.cvcer400ApplicationJSONObject = cvcer400ApplicationJSONObject;
        return this;
    }
    public Cvcer401ApplicationJson cvcer401ApplicationJSONObject;
    public CvcerResponse withCvcer401ApplicationJsonObject(Cvcer401ApplicationJson cvcer401ApplicationJSONObject) {
        this.cvcer401ApplicationJSONObject = cvcer401ApplicationJSONObject;
        return this;
    }
    public Cvcer404ApplicationJson cvcer404ApplicationJSONObject;
    public CvcerResponse withCvcer404ApplicationJsonObject(Cvcer404ApplicationJson cvcer404ApplicationJSONObject) {
        this.cvcer404ApplicationJSONObject = cvcer404ApplicationJSONObject;
        return this;
    }
    public Cvcer500ApplicationJson cvcer500ApplicationJSONObject;
    public CvcerResponse withCvcer500ApplicationJsonObject(Cvcer500ApplicationJson cvcer500ApplicationJSONObject) {
        this.cvcer500ApplicationJSONObject = cvcer500ApplicationJSONObject;
        return this;
    }
    public Cvcer502ApplicationJson cvcer502ApplicationJSONObject;
    public CvcerResponse withCvcer502ApplicationJsonObject(Cvcer502ApplicationJson cvcer502ApplicationJSONObject) {
        this.cvcer502ApplicationJSONObject = cvcer502ApplicationJSONObject;
        return this;
    }
    public Cvcer503ApplicationJson cvcer503ApplicationJSONObject;
    public CvcerResponse withCvcer503ApplicationJsonObject(Cvcer503ApplicationJson cvcer503ApplicationJSONObject) {
        this.cvcer503ApplicationJSONObject = cvcer503ApplicationJSONObject;
        return this;
    }
    public Cvcer504ApplicationJson cvcer504ApplicationJSONObject;
    public CvcerResponse withCvcer504ApplicationJsonObject(Cvcer504ApplicationJson cvcer504ApplicationJSONObject) {
        this.cvcer504ApplicationJSONObject = cvcer504ApplicationJSONObject;
        return this;
    }
}