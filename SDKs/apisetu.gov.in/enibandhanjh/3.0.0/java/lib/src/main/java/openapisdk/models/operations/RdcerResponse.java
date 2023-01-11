package openapisdk.models.operations;



public class RdcerResponse {
    public String contentType;
    public RdcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RdcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Rdcer400ApplicationJson rdcer400ApplicationJSONObject;
    public RdcerResponse withRdcer400ApplicationJsonObject(Rdcer400ApplicationJson rdcer400ApplicationJSONObject) {
        this.rdcer400ApplicationJSONObject = rdcer400ApplicationJSONObject;
        return this;
    }
    public Rdcer401ApplicationJson rdcer401ApplicationJSONObject;
    public RdcerResponse withRdcer401ApplicationJsonObject(Rdcer401ApplicationJson rdcer401ApplicationJSONObject) {
        this.rdcer401ApplicationJSONObject = rdcer401ApplicationJSONObject;
        return this;
    }
    public Rdcer404ApplicationJson rdcer404ApplicationJSONObject;
    public RdcerResponse withRdcer404ApplicationJsonObject(Rdcer404ApplicationJson rdcer404ApplicationJSONObject) {
        this.rdcer404ApplicationJSONObject = rdcer404ApplicationJSONObject;
        return this;
    }
    public Rdcer500ApplicationJson rdcer500ApplicationJSONObject;
    public RdcerResponse withRdcer500ApplicationJsonObject(Rdcer500ApplicationJson rdcer500ApplicationJSONObject) {
        this.rdcer500ApplicationJSONObject = rdcer500ApplicationJSONObject;
        return this;
    }
    public Rdcer502ApplicationJson rdcer502ApplicationJSONObject;
    public RdcerResponse withRdcer502ApplicationJsonObject(Rdcer502ApplicationJson rdcer502ApplicationJSONObject) {
        this.rdcer502ApplicationJSONObject = rdcer502ApplicationJSONObject;
        return this;
    }
    public Rdcer503ApplicationJson rdcer503ApplicationJSONObject;
    public RdcerResponse withRdcer503ApplicationJsonObject(Rdcer503ApplicationJson rdcer503ApplicationJSONObject) {
        this.rdcer503ApplicationJSONObject = rdcer503ApplicationJSONObject;
        return this;
    }
    public Rdcer504ApplicationJson rdcer504ApplicationJSONObject;
    public RdcerResponse withRdcer504ApplicationJsonObject(Rdcer504ApplicationJson rdcer504ApplicationJSONObject) {
        this.rdcer504ApplicationJSONObject = rdcer504ApplicationJSONObject;
        return this;
    }
}