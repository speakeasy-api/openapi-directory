package openapisdk.models.operations;



public class PostCompleteMigrationResponse {
    public byte[] body;
    public PostCompleteMigrationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCompleteMigrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCompleteMigrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}