package openapisdk.models.operations;



public class PostDeleteDbProxyResponse {
    public byte[] body;
    public PostDeleteDbProxyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteDbProxyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteDbProxyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}