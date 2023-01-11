package openapisdk.models.operations;



public class CmcerResponse {
    public String contentType;
    public CmcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CmcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Cmcer400ApplicationJson cmcer400ApplicationJSONObject;
    public CmcerResponse withCmcer400ApplicationJsonObject(Cmcer400ApplicationJson cmcer400ApplicationJSONObject) {
        this.cmcer400ApplicationJSONObject = cmcer400ApplicationJSONObject;
        return this;
    }
    public Cmcer401ApplicationJson cmcer401ApplicationJSONObject;
    public CmcerResponse withCmcer401ApplicationJsonObject(Cmcer401ApplicationJson cmcer401ApplicationJSONObject) {
        this.cmcer401ApplicationJSONObject = cmcer401ApplicationJSONObject;
        return this;
    }
    public Cmcer404ApplicationJson cmcer404ApplicationJSONObject;
    public CmcerResponse withCmcer404ApplicationJsonObject(Cmcer404ApplicationJson cmcer404ApplicationJSONObject) {
        this.cmcer404ApplicationJSONObject = cmcer404ApplicationJSONObject;
        return this;
    }
    public Cmcer500ApplicationJson cmcer500ApplicationJSONObject;
    public CmcerResponse withCmcer500ApplicationJsonObject(Cmcer500ApplicationJson cmcer500ApplicationJSONObject) {
        this.cmcer500ApplicationJSONObject = cmcer500ApplicationJSONObject;
        return this;
    }
    public Cmcer502ApplicationJson cmcer502ApplicationJSONObject;
    public CmcerResponse withCmcer502ApplicationJsonObject(Cmcer502ApplicationJson cmcer502ApplicationJSONObject) {
        this.cmcer502ApplicationJSONObject = cmcer502ApplicationJSONObject;
        return this;
    }
    public Cmcer503ApplicationJson cmcer503ApplicationJSONObject;
    public CmcerResponse withCmcer503ApplicationJsonObject(Cmcer503ApplicationJson cmcer503ApplicationJSONObject) {
        this.cmcer503ApplicationJSONObject = cmcer503ApplicationJSONObject;
        return this;
    }
    public Cmcer504ApplicationJson cmcer504ApplicationJSONObject;
    public CmcerResponse withCmcer504ApplicationJsonObject(Cmcer504ApplicationJson cmcer504ApplicationJSONObject) {
        this.cmcer504ApplicationJSONObject = cmcer504ApplicationJSONObject;
        return this;
    }
}