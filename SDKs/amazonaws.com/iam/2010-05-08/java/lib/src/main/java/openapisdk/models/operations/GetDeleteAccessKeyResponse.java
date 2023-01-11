package openapisdk.models.operations;



public class GetDeleteAccessKeyResponse {
    public byte[] body;
    public GetDeleteAccessKeyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteAccessKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteAccessKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}