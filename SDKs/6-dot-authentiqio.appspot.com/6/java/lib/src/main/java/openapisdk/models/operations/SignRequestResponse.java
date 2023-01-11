package openapisdk.models.operations;



public class SignRequestResponse {
    public byte[] body;
    public SignRequestResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SignRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public SignRequestResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public SignRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SignRequest201ApplicationJson signRequest201ApplicationJSONObject;
    public SignRequestResponse withSignRequest201ApplicationJsonObject(SignRequest201ApplicationJson signRequest201ApplicationJSONObject) {
        this.signRequest201ApplicationJSONObject = signRequest201ApplicationJSONObject;
        return this;
    }
}