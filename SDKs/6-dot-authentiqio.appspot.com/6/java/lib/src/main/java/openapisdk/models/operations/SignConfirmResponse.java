package openapisdk.models.operations;



public class SignConfirmResponse {
    public byte[] body;
    public SignConfirmResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SignConfirmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public SignConfirmResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public SignConfirmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SignConfirm202ApplicationJson signConfirm202ApplicationJSONObject;
    public SignConfirmResponse withSignConfirm202ApplicationJsonObject(SignConfirm202ApplicationJson signConfirm202ApplicationJSONObject) {
        this.signConfirm202ApplicationJSONObject = signConfirm202ApplicationJSONObject;
        return this;
    }
}