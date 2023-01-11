package openapisdk.models.operations;



public class LhcerResponse {
    public String contentType;
    public LhcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LhcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Lhcer400ApplicationJson lhcer400ApplicationJSONObject;
    public LhcerResponse withLhcer400ApplicationJsonObject(Lhcer400ApplicationJson lhcer400ApplicationJSONObject) {
        this.lhcer400ApplicationJSONObject = lhcer400ApplicationJSONObject;
        return this;
    }
    public Lhcer401ApplicationJson lhcer401ApplicationJSONObject;
    public LhcerResponse withLhcer401ApplicationJsonObject(Lhcer401ApplicationJson lhcer401ApplicationJSONObject) {
        this.lhcer401ApplicationJSONObject = lhcer401ApplicationJSONObject;
        return this;
    }
    public Lhcer404ApplicationJson lhcer404ApplicationJSONObject;
    public LhcerResponse withLhcer404ApplicationJsonObject(Lhcer404ApplicationJson lhcer404ApplicationJSONObject) {
        this.lhcer404ApplicationJSONObject = lhcer404ApplicationJSONObject;
        return this;
    }
    public Lhcer500ApplicationJson lhcer500ApplicationJSONObject;
    public LhcerResponse withLhcer500ApplicationJsonObject(Lhcer500ApplicationJson lhcer500ApplicationJSONObject) {
        this.lhcer500ApplicationJSONObject = lhcer500ApplicationJSONObject;
        return this;
    }
    public Lhcer502ApplicationJson lhcer502ApplicationJSONObject;
    public LhcerResponse withLhcer502ApplicationJsonObject(Lhcer502ApplicationJson lhcer502ApplicationJSONObject) {
        this.lhcer502ApplicationJSONObject = lhcer502ApplicationJSONObject;
        return this;
    }
    public Lhcer503ApplicationJson lhcer503ApplicationJSONObject;
    public LhcerResponse withLhcer503ApplicationJsonObject(Lhcer503ApplicationJson lhcer503ApplicationJSONObject) {
        this.lhcer503ApplicationJSONObject = lhcer503ApplicationJSONObject;
        return this;
    }
    public Lhcer504ApplicationJson lhcer504ApplicationJSONObject;
    public LhcerResponse withLhcer504ApplicationJsonObject(Lhcer504ApplicationJson lhcer504ApplicationJSONObject) {
        this.lhcer504ApplicationJSONObject = lhcer504ApplicationJSONObject;
        return this;
    }
}