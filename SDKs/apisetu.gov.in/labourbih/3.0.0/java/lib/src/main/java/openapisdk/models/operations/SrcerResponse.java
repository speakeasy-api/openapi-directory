package openapisdk.models.operations;



public class SrcerResponse {
    public String contentType;
    public SrcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SrcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Srcer400ApplicationJson srcer400ApplicationJSONObject;
    public SrcerResponse withSrcer400ApplicationJsonObject(Srcer400ApplicationJson srcer400ApplicationJSONObject) {
        this.srcer400ApplicationJSONObject = srcer400ApplicationJSONObject;
        return this;
    }
    public Srcer401ApplicationJson srcer401ApplicationJSONObject;
    public SrcerResponse withSrcer401ApplicationJsonObject(Srcer401ApplicationJson srcer401ApplicationJSONObject) {
        this.srcer401ApplicationJSONObject = srcer401ApplicationJSONObject;
        return this;
    }
    public Srcer404ApplicationJson srcer404ApplicationJSONObject;
    public SrcerResponse withSrcer404ApplicationJsonObject(Srcer404ApplicationJson srcer404ApplicationJSONObject) {
        this.srcer404ApplicationJSONObject = srcer404ApplicationJSONObject;
        return this;
    }
    public Srcer500ApplicationJson srcer500ApplicationJSONObject;
    public SrcerResponse withSrcer500ApplicationJsonObject(Srcer500ApplicationJson srcer500ApplicationJSONObject) {
        this.srcer500ApplicationJSONObject = srcer500ApplicationJSONObject;
        return this;
    }
    public Srcer502ApplicationJson srcer502ApplicationJSONObject;
    public SrcerResponse withSrcer502ApplicationJsonObject(Srcer502ApplicationJson srcer502ApplicationJSONObject) {
        this.srcer502ApplicationJSONObject = srcer502ApplicationJSONObject;
        return this;
    }
    public Srcer503ApplicationJson srcer503ApplicationJSONObject;
    public SrcerResponse withSrcer503ApplicationJsonObject(Srcer503ApplicationJson srcer503ApplicationJSONObject) {
        this.srcer503ApplicationJSONObject = srcer503ApplicationJSONObject;
        return this;
    }
    public Srcer504ApplicationJson srcer504ApplicationJSONObject;
    public SrcerResponse withSrcer504ApplicationJsonObject(Srcer504ApplicationJson srcer504ApplicationJSONObject) {
        this.srcer504ApplicationJSONObject = srcer504ApplicationJSONObject;
        return this;
    }
}