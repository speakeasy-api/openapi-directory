package openapisdk.models.operations;



public class SmcerResponse {
    public String contentType;
    public SmcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SmcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Smcer400ApplicationJson smcer400ApplicationJSONObject;
    public SmcerResponse withSmcer400ApplicationJsonObject(Smcer400ApplicationJson smcer400ApplicationJSONObject) {
        this.smcer400ApplicationJSONObject = smcer400ApplicationJSONObject;
        return this;
    }
    public Smcer401ApplicationJson smcer401ApplicationJSONObject;
    public SmcerResponse withSmcer401ApplicationJsonObject(Smcer401ApplicationJson smcer401ApplicationJSONObject) {
        this.smcer401ApplicationJSONObject = smcer401ApplicationJSONObject;
        return this;
    }
    public Smcer404ApplicationJson smcer404ApplicationJSONObject;
    public SmcerResponse withSmcer404ApplicationJsonObject(Smcer404ApplicationJson smcer404ApplicationJSONObject) {
        this.smcer404ApplicationJSONObject = smcer404ApplicationJSONObject;
        return this;
    }
    public Smcer500ApplicationJson smcer500ApplicationJSONObject;
    public SmcerResponse withSmcer500ApplicationJsonObject(Smcer500ApplicationJson smcer500ApplicationJSONObject) {
        this.smcer500ApplicationJSONObject = smcer500ApplicationJSONObject;
        return this;
    }
    public Smcer502ApplicationJson smcer502ApplicationJSONObject;
    public SmcerResponse withSmcer502ApplicationJsonObject(Smcer502ApplicationJson smcer502ApplicationJSONObject) {
        this.smcer502ApplicationJSONObject = smcer502ApplicationJSONObject;
        return this;
    }
    public Smcer503ApplicationJson smcer503ApplicationJSONObject;
    public SmcerResponse withSmcer503ApplicationJsonObject(Smcer503ApplicationJson smcer503ApplicationJSONObject) {
        this.smcer503ApplicationJSONObject = smcer503ApplicationJSONObject;
        return this;
    }
    public Smcer504ApplicationJson smcer504ApplicationJSONObject;
    public SmcerResponse withSmcer504ApplicationJsonObject(Smcer504ApplicationJson smcer504ApplicationJSONObject) {
        this.smcer504ApplicationJSONObject = smcer504ApplicationJSONObject;
        return this;
    }
}