package openapisdk.models.operations;



public class PostRestoreDbInstanceToPointInTimeResponse {
    public byte[] body;
    public PostRestoreDbInstanceToPointInTimeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRestoreDbInstanceToPointInTimeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRestoreDbInstanceToPointInTimeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}