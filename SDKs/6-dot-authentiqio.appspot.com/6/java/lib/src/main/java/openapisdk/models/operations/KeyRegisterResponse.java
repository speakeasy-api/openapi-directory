package openapisdk.models.operations;



public class KeyRegisterResponse {
    public byte[] body;
    public KeyRegisterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public KeyRegisterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public KeyRegisterResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public KeyRegisterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public KeyRegister201ApplicationJson keyRegister201ApplicationJSONObject;
    public KeyRegisterResponse withKeyRegister201ApplicationJsonObject(KeyRegister201ApplicationJson keyRegister201ApplicationJSONObject) {
        this.keyRegister201ApplicationJSONObject = keyRegister201ApplicationJSONObject;
        return this;
    }
}