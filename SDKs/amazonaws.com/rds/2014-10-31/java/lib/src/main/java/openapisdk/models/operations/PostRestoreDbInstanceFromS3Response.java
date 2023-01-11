package openapisdk.models.operations;



public class PostRestoreDbInstanceFromS3Response {
    public byte[] body;
    public PostRestoreDbInstanceFromS3Response withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRestoreDbInstanceFromS3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRestoreDbInstanceFromS3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}