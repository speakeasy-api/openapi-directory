package openapisdk.models.operations;



public class PostDescribeVolumesResponse {
    public byte[] body;
    public PostDescribeVolumesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeVolumesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeVolumesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}