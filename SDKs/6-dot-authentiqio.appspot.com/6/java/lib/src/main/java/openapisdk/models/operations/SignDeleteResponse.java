package openapisdk.models.operations;



public class SignDeleteResponse {
    public byte[] body;
    public SignDeleteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SignDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public SignDeleteResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public SignDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SignDelete200ApplicationJson signDelete200ApplicationJSONObject;
    public SignDeleteResponse withSignDelete200ApplicationJsonObject(SignDelete200ApplicationJson signDelete200ApplicationJSONObject) {
        this.signDelete200ApplicationJSONObject = signDelete200ApplicationJSONObject;
        return this;
    }
}