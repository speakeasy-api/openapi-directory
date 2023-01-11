package openapisdk.models.operations;



public class PostDescribeEndpointAccessResponse {
    public byte[] body;
    public PostDescribeEndpointAccessResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeEndpointAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeEndpointAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}