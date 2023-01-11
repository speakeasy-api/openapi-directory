package openapisdk.models.operations;



public class PostDescribeNetworkInterfacesResponse {
    public byte[] body;
    public PostDescribeNetworkInterfacesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeNetworkInterfacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeNetworkInterfacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}