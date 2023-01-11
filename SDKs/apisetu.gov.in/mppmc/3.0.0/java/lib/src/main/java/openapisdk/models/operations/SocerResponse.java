package openapisdk.models.operations;



public class SocerResponse {
    public String contentType;
    public SocerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SocerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Socer400ApplicationJson socer400ApplicationJSONObject;
    public SocerResponse withSocer400ApplicationJsonObject(Socer400ApplicationJson socer400ApplicationJSONObject) {
        this.socer400ApplicationJSONObject = socer400ApplicationJSONObject;
        return this;
    }
    public Socer401ApplicationJson socer401ApplicationJSONObject;
    public SocerResponse withSocer401ApplicationJsonObject(Socer401ApplicationJson socer401ApplicationJSONObject) {
        this.socer401ApplicationJSONObject = socer401ApplicationJSONObject;
        return this;
    }
    public Socer404ApplicationJson socer404ApplicationJSONObject;
    public SocerResponse withSocer404ApplicationJsonObject(Socer404ApplicationJson socer404ApplicationJSONObject) {
        this.socer404ApplicationJSONObject = socer404ApplicationJSONObject;
        return this;
    }
    public Socer500ApplicationJson socer500ApplicationJSONObject;
    public SocerResponse withSocer500ApplicationJsonObject(Socer500ApplicationJson socer500ApplicationJSONObject) {
        this.socer500ApplicationJSONObject = socer500ApplicationJSONObject;
        return this;
    }
    public Socer502ApplicationJson socer502ApplicationJSONObject;
    public SocerResponse withSocer502ApplicationJsonObject(Socer502ApplicationJson socer502ApplicationJSONObject) {
        this.socer502ApplicationJSONObject = socer502ApplicationJSONObject;
        return this;
    }
    public Socer503ApplicationJson socer503ApplicationJSONObject;
    public SocerResponse withSocer503ApplicationJsonObject(Socer503ApplicationJson socer503ApplicationJSONObject) {
        this.socer503ApplicationJSONObject = socer503ApplicationJSONObject;
        return this;
    }
    public Socer504ApplicationJson socer504ApplicationJSONObject;
    public SocerResponse withSocer504ApplicationJsonObject(Socer504ApplicationJson socer504ApplicationJSONObject) {
        this.socer504ApplicationJSONObject = socer504ApplicationJSONObject;
        return this;
    }
}