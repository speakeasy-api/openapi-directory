package openapisdk.models.operations;



public class AgcerResponse {
    public String contentType;
    public AgcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AgcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Agcer400ApplicationJson agcer400ApplicationJSONObject;
    public AgcerResponse withAgcer400ApplicationJsonObject(Agcer400ApplicationJson agcer400ApplicationJSONObject) {
        this.agcer400ApplicationJSONObject = agcer400ApplicationJSONObject;
        return this;
    }
    public Agcer401ApplicationJson agcer401ApplicationJSONObject;
    public AgcerResponse withAgcer401ApplicationJsonObject(Agcer401ApplicationJson agcer401ApplicationJSONObject) {
        this.agcer401ApplicationJSONObject = agcer401ApplicationJSONObject;
        return this;
    }
    public Agcer404ApplicationJson agcer404ApplicationJSONObject;
    public AgcerResponse withAgcer404ApplicationJsonObject(Agcer404ApplicationJson agcer404ApplicationJSONObject) {
        this.agcer404ApplicationJSONObject = agcer404ApplicationJSONObject;
        return this;
    }
    public Agcer500ApplicationJson agcer500ApplicationJSONObject;
    public AgcerResponse withAgcer500ApplicationJsonObject(Agcer500ApplicationJson agcer500ApplicationJSONObject) {
        this.agcer500ApplicationJSONObject = agcer500ApplicationJSONObject;
        return this;
    }
    public Agcer502ApplicationJson agcer502ApplicationJSONObject;
    public AgcerResponse withAgcer502ApplicationJsonObject(Agcer502ApplicationJson agcer502ApplicationJSONObject) {
        this.agcer502ApplicationJSONObject = agcer502ApplicationJSONObject;
        return this;
    }
    public Agcer503ApplicationJson agcer503ApplicationJSONObject;
    public AgcerResponse withAgcer503ApplicationJsonObject(Agcer503ApplicationJson agcer503ApplicationJSONObject) {
        this.agcer503ApplicationJSONObject = agcer503ApplicationJSONObject;
        return this;
    }
    public Agcer504ApplicationJson agcer504ApplicationJSONObject;
    public AgcerResponse withAgcer504ApplicationJsonObject(Agcer504ApplicationJson agcer504ApplicationJSONObject) {
        this.agcer504ApplicationJSONObject = agcer504ApplicationJSONObject;
        return this;
    }
}