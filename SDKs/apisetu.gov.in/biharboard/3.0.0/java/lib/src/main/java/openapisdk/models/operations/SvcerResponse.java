package openapisdk.models.operations;



public class SvcerResponse {
    public String contentType;
    public SvcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SvcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Svcer400ApplicationJson svcer400ApplicationJSONObject;
    public SvcerResponse withSvcer400ApplicationJsonObject(Svcer400ApplicationJson svcer400ApplicationJSONObject) {
        this.svcer400ApplicationJSONObject = svcer400ApplicationJSONObject;
        return this;
    }
    public Svcer401ApplicationJson svcer401ApplicationJSONObject;
    public SvcerResponse withSvcer401ApplicationJsonObject(Svcer401ApplicationJson svcer401ApplicationJSONObject) {
        this.svcer401ApplicationJSONObject = svcer401ApplicationJSONObject;
        return this;
    }
    public Svcer404ApplicationJson svcer404ApplicationJSONObject;
    public SvcerResponse withSvcer404ApplicationJsonObject(Svcer404ApplicationJson svcer404ApplicationJSONObject) {
        this.svcer404ApplicationJSONObject = svcer404ApplicationJSONObject;
        return this;
    }
    public Svcer500ApplicationJson svcer500ApplicationJSONObject;
    public SvcerResponse withSvcer500ApplicationJsonObject(Svcer500ApplicationJson svcer500ApplicationJSONObject) {
        this.svcer500ApplicationJSONObject = svcer500ApplicationJSONObject;
        return this;
    }
    public Svcer502ApplicationJson svcer502ApplicationJSONObject;
    public SvcerResponse withSvcer502ApplicationJsonObject(Svcer502ApplicationJson svcer502ApplicationJSONObject) {
        this.svcer502ApplicationJSONObject = svcer502ApplicationJSONObject;
        return this;
    }
    public Svcer503ApplicationJson svcer503ApplicationJSONObject;
    public SvcerResponse withSvcer503ApplicationJsonObject(Svcer503ApplicationJson svcer503ApplicationJSONObject) {
        this.svcer503ApplicationJSONObject = svcer503ApplicationJSONObject;
        return this;
    }
    public Svcer504ApplicationJson svcer504ApplicationJSONObject;
    public SvcerResponse withSvcer504ApplicationJsonObject(Svcer504ApplicationJson svcer504ApplicationJSONObject) {
        this.svcer504ApplicationJSONObject = svcer504ApplicationJSONObject;
        return this;
    }
}