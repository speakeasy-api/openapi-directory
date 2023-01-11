package openapisdk.models.operations;



public class KeyRevokeResponse {
    public byte[] body;
    public KeyRevokeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public KeyRevokeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public KeyRevokeResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public KeyRevokeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public KeyRevoke200ApplicationJson keyRevoke200ApplicationJSONObject;
    public KeyRevokeResponse withKeyRevoke200ApplicationJsonObject(KeyRevoke200ApplicationJson keyRevoke200ApplicationJSONObject) {
        this.keyRevoke200ApplicationJSONObject = keyRevoke200ApplicationJSONObject;
        return this;
    }
}