package openapisdk.models.operations;



public class GetDescribeEndpointAuthorizationResponse {
    public byte[] body;
    public GetDescribeEndpointAuthorizationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeEndpointAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeEndpointAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}