package openapisdk.models.operations;



public class PostStartMigrationResponse {
    public byte[] body;
    public PostStartMigrationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostStartMigrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostStartMigrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}