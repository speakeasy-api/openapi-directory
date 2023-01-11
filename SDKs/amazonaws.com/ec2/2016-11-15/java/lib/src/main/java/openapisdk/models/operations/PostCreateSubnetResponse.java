package openapisdk.models.operations;



public class PostCreateSubnetResponse {
    public byte[] body;
    public PostCreateSubnetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateSubnetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateSubnetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}