package openapisdk.models.operations;



public class GetCompleteMigrationResponse {
    public byte[] body;
    public GetCompleteMigrationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCompleteMigrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCompleteMigrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}