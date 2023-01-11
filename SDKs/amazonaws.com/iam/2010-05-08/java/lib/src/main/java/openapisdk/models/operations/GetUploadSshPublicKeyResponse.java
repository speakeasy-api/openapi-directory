package openapisdk.models.operations;



public class GetUploadSshPublicKeyResponse {
    public byte[] body;
    public GetUploadSshPublicKeyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUploadSshPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUploadSshPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}