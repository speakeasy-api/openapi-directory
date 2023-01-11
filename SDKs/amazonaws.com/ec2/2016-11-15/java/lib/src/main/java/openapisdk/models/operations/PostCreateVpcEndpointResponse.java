package openapisdk.models.operations;



public class PostCreateVpcEndpointResponse {
    public byte[] body;
    public PostCreateVpcEndpointResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateVpcEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateVpcEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}