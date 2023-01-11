package openapisdk.models.operations;



public class PostModifyDbProxyResponse {
    public byte[] body;
    public PostModifyDbProxyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyDbProxyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyDbProxyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}