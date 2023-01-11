package openapisdk.models.operations;



public class ClcerResponse {
    public String contentType;
    public ClcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Clcer400ApplicationJson clcer400ApplicationJSONObject;
    public ClcerResponse withClcer400ApplicationJsonObject(Clcer400ApplicationJson clcer400ApplicationJSONObject) {
        this.clcer400ApplicationJSONObject = clcer400ApplicationJSONObject;
        return this;
    }
    public Clcer401ApplicationJson clcer401ApplicationJSONObject;
    public ClcerResponse withClcer401ApplicationJsonObject(Clcer401ApplicationJson clcer401ApplicationJSONObject) {
        this.clcer401ApplicationJSONObject = clcer401ApplicationJSONObject;
        return this;
    }
    public Clcer404ApplicationJson clcer404ApplicationJSONObject;
    public ClcerResponse withClcer404ApplicationJsonObject(Clcer404ApplicationJson clcer404ApplicationJSONObject) {
        this.clcer404ApplicationJSONObject = clcer404ApplicationJSONObject;
        return this;
    }
    public Clcer500ApplicationJson clcer500ApplicationJSONObject;
    public ClcerResponse withClcer500ApplicationJsonObject(Clcer500ApplicationJson clcer500ApplicationJSONObject) {
        this.clcer500ApplicationJSONObject = clcer500ApplicationJSONObject;
        return this;
    }
    public Clcer502ApplicationJson clcer502ApplicationJSONObject;
    public ClcerResponse withClcer502ApplicationJsonObject(Clcer502ApplicationJson clcer502ApplicationJSONObject) {
        this.clcer502ApplicationJSONObject = clcer502ApplicationJSONObject;
        return this;
    }
    public Clcer503ApplicationJson clcer503ApplicationJSONObject;
    public ClcerResponse withClcer503ApplicationJsonObject(Clcer503ApplicationJson clcer503ApplicationJSONObject) {
        this.clcer503ApplicationJSONObject = clcer503ApplicationJSONObject;
        return this;
    }
    public Clcer504ApplicationJson clcer504ApplicationJSONObject;
    public ClcerResponse withClcer504ApplicationJsonObject(Clcer504ApplicationJson clcer504ApplicationJSONObject) {
        this.clcer504ApplicationJSONObject = clcer504ApplicationJSONObject;
        return this;
    }
}