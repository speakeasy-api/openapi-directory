package openapisdk.models.operations;



public class GetCreateServiceSpecificCredentialResponse {
    public byte[] body;
    public GetCreateServiceSpecificCredentialResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCreateServiceSpecificCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCreateServiceSpecificCredentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}