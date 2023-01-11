package openapisdk.models.operations;



public class IdcerResponse {
    public String contentType;
    public IdcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IdcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Idcer400ApplicationJson idcer400ApplicationJSONObject;
    public IdcerResponse withIdcer400ApplicationJsonObject(Idcer400ApplicationJson idcer400ApplicationJSONObject) {
        this.idcer400ApplicationJSONObject = idcer400ApplicationJSONObject;
        return this;
    }
    public Idcer401ApplicationJson idcer401ApplicationJSONObject;
    public IdcerResponse withIdcer401ApplicationJsonObject(Idcer401ApplicationJson idcer401ApplicationJSONObject) {
        this.idcer401ApplicationJSONObject = idcer401ApplicationJSONObject;
        return this;
    }
    public Idcer404ApplicationJson idcer404ApplicationJSONObject;
    public IdcerResponse withIdcer404ApplicationJsonObject(Idcer404ApplicationJson idcer404ApplicationJSONObject) {
        this.idcer404ApplicationJSONObject = idcer404ApplicationJSONObject;
        return this;
    }
    public Idcer500ApplicationJson idcer500ApplicationJSONObject;
    public IdcerResponse withIdcer500ApplicationJsonObject(Idcer500ApplicationJson idcer500ApplicationJSONObject) {
        this.idcer500ApplicationJSONObject = idcer500ApplicationJSONObject;
        return this;
    }
    public Idcer502ApplicationJson idcer502ApplicationJSONObject;
    public IdcerResponse withIdcer502ApplicationJsonObject(Idcer502ApplicationJson idcer502ApplicationJSONObject) {
        this.idcer502ApplicationJSONObject = idcer502ApplicationJSONObject;
        return this;
    }
    public Idcer503ApplicationJson idcer503ApplicationJSONObject;
    public IdcerResponse withIdcer503ApplicationJsonObject(Idcer503ApplicationJson idcer503ApplicationJSONObject) {
        this.idcer503ApplicationJSONObject = idcer503ApplicationJSONObject;
        return this;
    }
    public Idcer504ApplicationJson idcer504ApplicationJSONObject;
    public IdcerResponse withIdcer504ApplicationJsonObject(Idcer504ApplicationJson idcer504ApplicationJSONObject) {
        this.idcer504ApplicationJSONObject = idcer504ApplicationJSONObject;
        return this;
    }
}