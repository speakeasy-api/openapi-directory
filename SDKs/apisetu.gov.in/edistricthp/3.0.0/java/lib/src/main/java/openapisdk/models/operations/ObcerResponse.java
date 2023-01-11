package openapisdk.models.operations;



public class ObcerResponse {
    public String contentType;
    public ObcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ObcerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Obcer400ApplicationJson obcer400ApplicationJSONObject;
    public ObcerResponse withObcer400ApplicationJsonObject(Obcer400ApplicationJson obcer400ApplicationJSONObject) {
        this.obcer400ApplicationJSONObject = obcer400ApplicationJSONObject;
        return this;
    }
    public Obcer401ApplicationJson obcer401ApplicationJSONObject;
    public ObcerResponse withObcer401ApplicationJsonObject(Obcer401ApplicationJson obcer401ApplicationJSONObject) {
        this.obcer401ApplicationJSONObject = obcer401ApplicationJSONObject;
        return this;
    }
    public Obcer404ApplicationJson obcer404ApplicationJSONObject;
    public ObcerResponse withObcer404ApplicationJsonObject(Obcer404ApplicationJson obcer404ApplicationJSONObject) {
        this.obcer404ApplicationJSONObject = obcer404ApplicationJSONObject;
        return this;
    }
    public Obcer500ApplicationJson obcer500ApplicationJSONObject;
    public ObcerResponse withObcer500ApplicationJsonObject(Obcer500ApplicationJson obcer500ApplicationJSONObject) {
        this.obcer500ApplicationJSONObject = obcer500ApplicationJSONObject;
        return this;
    }
    public Obcer502ApplicationJson obcer502ApplicationJSONObject;
    public ObcerResponse withObcer502ApplicationJsonObject(Obcer502ApplicationJson obcer502ApplicationJSONObject) {
        this.obcer502ApplicationJSONObject = obcer502ApplicationJSONObject;
        return this;
    }
    public Obcer503ApplicationJson obcer503ApplicationJSONObject;
    public ObcerResponse withObcer503ApplicationJsonObject(Obcer503ApplicationJson obcer503ApplicationJSONObject) {
        this.obcer503ApplicationJSONObject = obcer503ApplicationJSONObject;
        return this;
    }
    public Obcer504ApplicationJson obcer504ApplicationJSONObject;
    public ObcerResponse withObcer504ApplicationJsonObject(Obcer504ApplicationJson obcer504ApplicationJSONObject) {
        this.obcer504ApplicationJSONObject = obcer504ApplicationJSONObject;
        return this;
    }
}