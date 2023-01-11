package openapisdk.models.operations;



public class PushLoginRequestResponse {
    public byte[] body;
    public PushLoginRequestResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PushLoginRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public PushLoginRequestResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PushLoginRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PushLoginRequest200ApplicationJson pushLoginRequest200ApplicationJSONObject;
    public PushLoginRequestResponse withPushLoginRequest200ApplicationJsonObject(PushLoginRequest200ApplicationJson pushLoginRequest200ApplicationJSONObject) {
        this.pushLoginRequest200ApplicationJSONObject = pushLoginRequest200ApplicationJSONObject;
        return this;
    }
}