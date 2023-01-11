package openapisdk.models.operations;



public class PostRestoreDbClusterToPointInTimeResponse {
    public byte[] body;
    public PostRestoreDbClusterToPointInTimeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRestoreDbClusterToPointInTimeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRestoreDbClusterToPointInTimeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}