package openapisdk.models.operations;



public class PostDeleteExpressionResponse {
    public byte[] body;
    public PostDeleteExpressionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteExpressionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteExpressionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}