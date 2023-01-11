package openapisdk.models.operations;



public class PostImportKeyPairResponse {
    public byte[] body;
    public PostImportKeyPairResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostImportKeyPairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostImportKeyPairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}