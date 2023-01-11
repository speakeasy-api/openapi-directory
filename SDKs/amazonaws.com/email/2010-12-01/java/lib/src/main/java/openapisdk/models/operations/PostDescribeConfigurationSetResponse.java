package openapisdk.models.operations;



public class PostDescribeConfigurationSetResponse {
    public byte[] body;
    public PostDescribeConfigurationSetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeConfigurationSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeConfigurationSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}