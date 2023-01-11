package openapisdk.models.operations;



public class LvcerResponse {
    public String contentType;
    public LvcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LvcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Lvcer400ApplicationJson lvcer400ApplicationJSONObject;
    public LvcerResponse withLvcer400ApplicationJsonObject(Lvcer400ApplicationJson lvcer400ApplicationJSONObject) {
        this.lvcer400ApplicationJSONObject = lvcer400ApplicationJSONObject;
        return this;
    }
    public Lvcer401ApplicationJson lvcer401ApplicationJSONObject;
    public LvcerResponse withLvcer401ApplicationJsonObject(Lvcer401ApplicationJson lvcer401ApplicationJSONObject) {
        this.lvcer401ApplicationJSONObject = lvcer401ApplicationJSONObject;
        return this;
    }
    public Lvcer404ApplicationJson lvcer404ApplicationJSONObject;
    public LvcerResponse withLvcer404ApplicationJsonObject(Lvcer404ApplicationJson lvcer404ApplicationJSONObject) {
        this.lvcer404ApplicationJSONObject = lvcer404ApplicationJSONObject;
        return this;
    }
    public Lvcer500ApplicationJson lvcer500ApplicationJSONObject;
    public LvcerResponse withLvcer500ApplicationJsonObject(Lvcer500ApplicationJson lvcer500ApplicationJSONObject) {
        this.lvcer500ApplicationJSONObject = lvcer500ApplicationJSONObject;
        return this;
    }
    public Lvcer502ApplicationJson lvcer502ApplicationJSONObject;
    public LvcerResponse withLvcer502ApplicationJsonObject(Lvcer502ApplicationJson lvcer502ApplicationJSONObject) {
        this.lvcer502ApplicationJSONObject = lvcer502ApplicationJSONObject;
        return this;
    }
    public Lvcer503ApplicationJson lvcer503ApplicationJSONObject;
    public LvcerResponse withLvcer503ApplicationJsonObject(Lvcer503ApplicationJson lvcer503ApplicationJSONObject) {
        this.lvcer503ApplicationJSONObject = lvcer503ApplicationJSONObject;
        return this;
    }
    public Lvcer504ApplicationJson lvcer504ApplicationJSONObject;
    public LvcerResponse withLvcer504ApplicationJsonObject(Lvcer504ApplicationJson lvcer504ApplicationJSONObject) {
        this.lvcer504ApplicationJSONObject = lvcer504ApplicationJSONObject;
        return this;
    }
}