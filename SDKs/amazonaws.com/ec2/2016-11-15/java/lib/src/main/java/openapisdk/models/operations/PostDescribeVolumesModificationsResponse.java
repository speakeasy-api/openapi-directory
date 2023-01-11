package openapisdk.models.operations;



public class PostDescribeVolumesModificationsResponse {
    public byte[] body;
    public PostDescribeVolumesModificationsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeVolumesModificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeVolumesModificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}