package openapisdk.models.operations;



public class PostRestoreDbClusterFromS3Response {
    public byte[] body;
    public PostRestoreDbClusterFromS3Response withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRestoreDbClusterFromS3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRestoreDbClusterFromS3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}