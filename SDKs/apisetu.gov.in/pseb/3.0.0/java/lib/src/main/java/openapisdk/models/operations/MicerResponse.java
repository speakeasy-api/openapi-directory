package openapisdk.models.operations;



public class MicerResponse {
    public String contentType;
    public MicerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MicerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Micer400ApplicationJson micer400ApplicationJSONObject;
    public MicerResponse withMicer400ApplicationJsonObject(Micer400ApplicationJson micer400ApplicationJSONObject) {
        this.micer400ApplicationJSONObject = micer400ApplicationJSONObject;
        return this;
    }
    public Micer401ApplicationJson micer401ApplicationJSONObject;
    public MicerResponse withMicer401ApplicationJsonObject(Micer401ApplicationJson micer401ApplicationJSONObject) {
        this.micer401ApplicationJSONObject = micer401ApplicationJSONObject;
        return this;
    }
    public Micer404ApplicationJson micer404ApplicationJSONObject;
    public MicerResponse withMicer404ApplicationJsonObject(Micer404ApplicationJson micer404ApplicationJSONObject) {
        this.micer404ApplicationJSONObject = micer404ApplicationJSONObject;
        return this;
    }
    public Micer500ApplicationJson micer500ApplicationJSONObject;
    public MicerResponse withMicer500ApplicationJsonObject(Micer500ApplicationJson micer500ApplicationJSONObject) {
        this.micer500ApplicationJSONObject = micer500ApplicationJSONObject;
        return this;
    }
    public Micer502ApplicationJson micer502ApplicationJSONObject;
    public MicerResponse withMicer502ApplicationJsonObject(Micer502ApplicationJson micer502ApplicationJSONObject) {
        this.micer502ApplicationJSONObject = micer502ApplicationJSONObject;
        return this;
    }
    public Micer503ApplicationJson micer503ApplicationJSONObject;
    public MicerResponse withMicer503ApplicationJsonObject(Micer503ApplicationJson micer503ApplicationJSONObject) {
        this.micer503ApplicationJSONObject = micer503ApplicationJSONObject;
        return this;
    }
    public Micer504ApplicationJson micer504ApplicationJSONObject;
    public MicerResponse withMicer504ApplicationJsonObject(Micer504ApplicationJson micer504ApplicationJSONObject) {
        this.micer504ApplicationJSONObject = micer504ApplicationJSONObject;
        return this;
    }
}