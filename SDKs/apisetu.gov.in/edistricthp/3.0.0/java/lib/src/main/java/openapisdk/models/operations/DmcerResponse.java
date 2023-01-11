package openapisdk.models.operations;



public class DmcerResponse {
    public String contentType;
    public DmcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DmcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Dmcer400ApplicationJson dmcer400ApplicationJSONObject;
    public DmcerResponse withDmcer400ApplicationJsonObject(Dmcer400ApplicationJson dmcer400ApplicationJSONObject) {
        this.dmcer400ApplicationJSONObject = dmcer400ApplicationJSONObject;
        return this;
    }
    public Dmcer401ApplicationJson dmcer401ApplicationJSONObject;
    public DmcerResponse withDmcer401ApplicationJsonObject(Dmcer401ApplicationJson dmcer401ApplicationJSONObject) {
        this.dmcer401ApplicationJSONObject = dmcer401ApplicationJSONObject;
        return this;
    }
    public Dmcer404ApplicationJson dmcer404ApplicationJSONObject;
    public DmcerResponse withDmcer404ApplicationJsonObject(Dmcer404ApplicationJson dmcer404ApplicationJSONObject) {
        this.dmcer404ApplicationJSONObject = dmcer404ApplicationJSONObject;
        return this;
    }
    public Dmcer500ApplicationJson dmcer500ApplicationJSONObject;
    public DmcerResponse withDmcer500ApplicationJsonObject(Dmcer500ApplicationJson dmcer500ApplicationJSONObject) {
        this.dmcer500ApplicationJSONObject = dmcer500ApplicationJSONObject;
        return this;
    }
    public Dmcer502ApplicationJson dmcer502ApplicationJSONObject;
    public DmcerResponse withDmcer502ApplicationJsonObject(Dmcer502ApplicationJson dmcer502ApplicationJSONObject) {
        this.dmcer502ApplicationJSONObject = dmcer502ApplicationJSONObject;
        return this;
    }
    public Dmcer503ApplicationJson dmcer503ApplicationJSONObject;
    public DmcerResponse withDmcer503ApplicationJsonObject(Dmcer503ApplicationJson dmcer503ApplicationJSONObject) {
        this.dmcer503ApplicationJSONObject = dmcer503ApplicationJSONObject;
        return this;
    }
    public Dmcer504ApplicationJson dmcer504ApplicationJSONObject;
    public DmcerResponse withDmcer504ApplicationJsonObject(Dmcer504ApplicationJson dmcer504ApplicationJSONObject) {
        this.dmcer504ApplicationJSONObject = dmcer504ApplicationJSONObject;
        return this;
    }
}