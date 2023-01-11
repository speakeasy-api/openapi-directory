package openapisdk.models.operations;



public class GetChangePasswordResponse {
    public byte[] body;
    public GetChangePasswordResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetChangePasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChangePasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}