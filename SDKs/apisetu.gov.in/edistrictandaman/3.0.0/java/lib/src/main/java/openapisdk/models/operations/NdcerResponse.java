package openapisdk.models.operations;



public class NdcerResponse {
    public String contentType;
    public NdcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NdcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Ndcer400ApplicationJson ndcer400ApplicationJSONObject;
    public NdcerResponse withNdcer400ApplicationJsonObject(Ndcer400ApplicationJson ndcer400ApplicationJSONObject) {
        this.ndcer400ApplicationJSONObject = ndcer400ApplicationJSONObject;
        return this;
    }
    public Ndcer401ApplicationJson ndcer401ApplicationJSONObject;
    public NdcerResponse withNdcer401ApplicationJsonObject(Ndcer401ApplicationJson ndcer401ApplicationJSONObject) {
        this.ndcer401ApplicationJSONObject = ndcer401ApplicationJSONObject;
        return this;
    }
    public Ndcer404ApplicationJson ndcer404ApplicationJSONObject;
    public NdcerResponse withNdcer404ApplicationJsonObject(Ndcer404ApplicationJson ndcer404ApplicationJSONObject) {
        this.ndcer404ApplicationJSONObject = ndcer404ApplicationJSONObject;
        return this;
    }
    public Ndcer500ApplicationJson ndcer500ApplicationJSONObject;
    public NdcerResponse withNdcer500ApplicationJsonObject(Ndcer500ApplicationJson ndcer500ApplicationJSONObject) {
        this.ndcer500ApplicationJSONObject = ndcer500ApplicationJSONObject;
        return this;
    }
    public Ndcer502ApplicationJson ndcer502ApplicationJSONObject;
    public NdcerResponse withNdcer502ApplicationJsonObject(Ndcer502ApplicationJson ndcer502ApplicationJSONObject) {
        this.ndcer502ApplicationJSONObject = ndcer502ApplicationJSONObject;
        return this;
    }
    public Ndcer503ApplicationJson ndcer503ApplicationJSONObject;
    public NdcerResponse withNdcer503ApplicationJsonObject(Ndcer503ApplicationJson ndcer503ApplicationJSONObject) {
        this.ndcer503ApplicationJSONObject = ndcer503ApplicationJSONObject;
        return this;
    }
    public Ndcer504ApplicationJson ndcer504ApplicationJSONObject;
    public NdcerResponse withNdcer504ApplicationJsonObject(Ndcer504ApplicationJson ndcer504ApplicationJSONObject) {
        this.ndcer504ApplicationJSONObject = ndcer504ApplicationJSONObject;
        return this;
    }
}