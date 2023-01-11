package openapisdk.models.operations;



public class KeyBindResponse {
    public byte[] body;
    public KeyBindResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public KeyBindResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public KeyBindResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public KeyBindResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public KeyBind200ApplicationJson keyBind200ApplicationJSONObject;
    public KeyBindResponse withKeyBind200ApplicationJsonObject(KeyBind200ApplicationJson keyBind200ApplicationJSONObject) {
        this.keyBind200ApplicationJSONObject = keyBind200ApplicationJSONObject;
        return this;
    }
}