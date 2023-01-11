package openapisdk.models.operations;



public class KeyUpdateResponse {
    public byte[] body;
    public KeyUpdateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public KeyUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public KeyUpdateResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public KeyUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public KeyUpdate200ApplicationJson keyUpdate200ApplicationJSONObject;
    public KeyUpdateResponse withKeyUpdate200ApplicationJsonObject(KeyUpdate200ApplicationJson keyUpdate200ApplicationJSONObject) {
        this.keyUpdate200ApplicationJSONObject = keyUpdate200ApplicationJSONObject;
        return this;
    }
}