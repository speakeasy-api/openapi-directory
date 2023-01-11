package openapisdk.models.operations;



public class GetUpdateSshPublicKeyResponse {
    public byte[] body;
    public GetUpdateSshPublicKeyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUpdateSshPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUpdateSshPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}