package openapisdk.models.operations;



public class KecerResponse {
    public String contentType;
    public KecerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public KecerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Kecer400ApplicationJson kecer400ApplicationJSONObject;
    public KecerResponse withKecer400ApplicationJsonObject(Kecer400ApplicationJson kecer400ApplicationJSONObject) {
        this.kecer400ApplicationJSONObject = kecer400ApplicationJSONObject;
        return this;
    }
    public Kecer401ApplicationJson kecer401ApplicationJSONObject;
    public KecerResponse withKecer401ApplicationJsonObject(Kecer401ApplicationJson kecer401ApplicationJSONObject) {
        this.kecer401ApplicationJSONObject = kecer401ApplicationJSONObject;
        return this;
    }
    public Kecer404ApplicationJson kecer404ApplicationJSONObject;
    public KecerResponse withKecer404ApplicationJsonObject(Kecer404ApplicationJson kecer404ApplicationJSONObject) {
        this.kecer404ApplicationJSONObject = kecer404ApplicationJSONObject;
        return this;
    }
    public Kecer500ApplicationJson kecer500ApplicationJSONObject;
    public KecerResponse withKecer500ApplicationJsonObject(Kecer500ApplicationJson kecer500ApplicationJSONObject) {
        this.kecer500ApplicationJSONObject = kecer500ApplicationJSONObject;
        return this;
    }
    public Kecer502ApplicationJson kecer502ApplicationJSONObject;
    public KecerResponse withKecer502ApplicationJsonObject(Kecer502ApplicationJson kecer502ApplicationJSONObject) {
        this.kecer502ApplicationJSONObject = kecer502ApplicationJSONObject;
        return this;
    }
    public Kecer503ApplicationJson kecer503ApplicationJSONObject;
    public KecerResponse withKecer503ApplicationJsonObject(Kecer503ApplicationJson kecer503ApplicationJSONObject) {
        this.kecer503ApplicationJSONObject = kecer503ApplicationJSONObject;
        return this;
    }
    public Kecer504ApplicationJson kecer504ApplicationJSONObject;
    public KecerResponse withKecer504ApplicationJsonObject(Kecer504ApplicationJson kecer504ApplicationJSONObject) {
        this.kecer504ApplicationJSONObject = kecer504ApplicationJSONObject;
        return this;
    }
}