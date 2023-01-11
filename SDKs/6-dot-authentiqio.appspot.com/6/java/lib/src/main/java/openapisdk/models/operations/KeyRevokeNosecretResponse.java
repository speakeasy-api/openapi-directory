package openapisdk.models.operations;



public class KeyRevokeNosecretResponse {
    public byte[] body;
    public KeyRevokeNosecretResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public KeyRevokeNosecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public KeyRevokeNosecretResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public KeyRevokeNosecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public KeyRevokeNosecret200ApplicationJson keyRevokeNosecret200ApplicationJSONObject;
    public KeyRevokeNosecretResponse withKeyRevokeNosecret200ApplicationJsonObject(KeyRevokeNosecret200ApplicationJson keyRevokeNosecret200ApplicationJSONObject) {
        this.keyRevokeNosecret200ApplicationJSONObject = keyRevokeNosecret200ApplicationJSONObject;
        return this;
    }
}