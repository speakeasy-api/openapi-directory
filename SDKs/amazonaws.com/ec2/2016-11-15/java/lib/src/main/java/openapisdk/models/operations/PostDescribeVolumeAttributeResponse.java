package openapisdk.models.operations;



public class PostDescribeVolumeAttributeResponse {
    public byte[] body;
    public PostDescribeVolumeAttributeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeVolumeAttributeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeVolumeAttributeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}