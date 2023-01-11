package openapisdk.models.operations;



public class GetListAccessKeysResponse {
    public byte[] body;
    public GetListAccessKeysResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListAccessKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListAccessKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}