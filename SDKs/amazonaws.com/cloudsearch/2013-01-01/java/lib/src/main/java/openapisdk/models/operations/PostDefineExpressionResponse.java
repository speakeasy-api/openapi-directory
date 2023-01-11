package openapisdk.models.operations;



public class PostDefineExpressionResponse {
    public byte[] body;
    public PostDefineExpressionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDefineExpressionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDefineExpressionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}