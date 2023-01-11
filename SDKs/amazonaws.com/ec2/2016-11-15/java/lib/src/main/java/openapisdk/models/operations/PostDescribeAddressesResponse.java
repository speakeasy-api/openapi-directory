package openapisdk.models.operations;



public class PostDescribeAddressesResponse {
    public byte[] body;
    public PostDescribeAddressesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeAddressesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeAddressesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}