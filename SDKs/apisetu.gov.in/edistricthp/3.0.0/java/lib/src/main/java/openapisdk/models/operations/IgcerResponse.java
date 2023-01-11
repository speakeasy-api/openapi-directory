package openapisdk.models.operations;



public class IgcerResponse {
    public String contentType;
    public IgcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IgcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Igcer400ApplicationJson igcer400ApplicationJSONObject;
    public IgcerResponse withIgcer400ApplicationJsonObject(Igcer400ApplicationJson igcer400ApplicationJSONObject) {
        this.igcer400ApplicationJSONObject = igcer400ApplicationJSONObject;
        return this;
    }
    public Igcer401ApplicationJson igcer401ApplicationJSONObject;
    public IgcerResponse withIgcer401ApplicationJsonObject(Igcer401ApplicationJson igcer401ApplicationJSONObject) {
        this.igcer401ApplicationJSONObject = igcer401ApplicationJSONObject;
        return this;
    }
    public Igcer404ApplicationJson igcer404ApplicationJSONObject;
    public IgcerResponse withIgcer404ApplicationJsonObject(Igcer404ApplicationJson igcer404ApplicationJSONObject) {
        this.igcer404ApplicationJSONObject = igcer404ApplicationJSONObject;
        return this;
    }
    public Igcer500ApplicationJson igcer500ApplicationJSONObject;
    public IgcerResponse withIgcer500ApplicationJsonObject(Igcer500ApplicationJson igcer500ApplicationJSONObject) {
        this.igcer500ApplicationJSONObject = igcer500ApplicationJSONObject;
        return this;
    }
    public Igcer502ApplicationJson igcer502ApplicationJSONObject;
    public IgcerResponse withIgcer502ApplicationJsonObject(Igcer502ApplicationJson igcer502ApplicationJSONObject) {
        this.igcer502ApplicationJSONObject = igcer502ApplicationJSONObject;
        return this;
    }
    public Igcer503ApplicationJson igcer503ApplicationJSONObject;
    public IgcerResponse withIgcer503ApplicationJsonObject(Igcer503ApplicationJson igcer503ApplicationJSONObject) {
        this.igcer503ApplicationJSONObject = igcer503ApplicationJSONObject;
        return this;
    }
    public Igcer504ApplicationJson igcer504ApplicationJSONObject;
    public IgcerResponse withIgcer504ApplicationJsonObject(Igcer504ApplicationJson igcer504ApplicationJSONObject) {
        this.igcer504ApplicationJSONObject = igcer504ApplicationJSONObject;
        return this;
    }
}