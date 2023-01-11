package openapisdk.models.operations;



public class PostCreateVpcResponse {
    public byte[] body;
    public PostCreateVpcResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateVpcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateVpcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}