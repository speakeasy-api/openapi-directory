package openapisdk.models.operations;



public class SicerResponse {
    public String contentType;
    public SicerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SicerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Sicer400ApplicationJson sicer400ApplicationJSONObject;
    public SicerResponse withSicer400ApplicationJsonObject(Sicer400ApplicationJson sicer400ApplicationJSONObject) {
        this.sicer400ApplicationJSONObject = sicer400ApplicationJSONObject;
        return this;
    }
    public Sicer401ApplicationJson sicer401ApplicationJSONObject;
    public SicerResponse withSicer401ApplicationJsonObject(Sicer401ApplicationJson sicer401ApplicationJSONObject) {
        this.sicer401ApplicationJSONObject = sicer401ApplicationJSONObject;
        return this;
    }
    public Sicer404ApplicationJson sicer404ApplicationJSONObject;
    public SicerResponse withSicer404ApplicationJsonObject(Sicer404ApplicationJson sicer404ApplicationJSONObject) {
        this.sicer404ApplicationJSONObject = sicer404ApplicationJSONObject;
        return this;
    }
    public Sicer500ApplicationJson sicer500ApplicationJSONObject;
    public SicerResponse withSicer500ApplicationJsonObject(Sicer500ApplicationJson sicer500ApplicationJSONObject) {
        this.sicer500ApplicationJSONObject = sicer500ApplicationJSONObject;
        return this;
    }
    public Sicer502ApplicationJson sicer502ApplicationJSONObject;
    public SicerResponse withSicer502ApplicationJsonObject(Sicer502ApplicationJson sicer502ApplicationJSONObject) {
        this.sicer502ApplicationJSONObject = sicer502ApplicationJSONObject;
        return this;
    }
    public Sicer503ApplicationJson sicer503ApplicationJSONObject;
    public SicerResponse withSicer503ApplicationJsonObject(Sicer503ApplicationJson sicer503ApplicationJSONObject) {
        this.sicer503ApplicationJSONObject = sicer503ApplicationJSONObject;
        return this;
    }
    public Sicer504ApplicationJson sicer504ApplicationJSONObject;
    public SicerResponse withSicer504ApplicationJsonObject(Sicer504ApplicationJson sicer504ApplicationJSONObject) {
        this.sicer504ApplicationJSONObject = sicer504ApplicationJSONObject;
        return this;
    }
}