package openapisdk.models.operations;



public class PostGetPasswordDataResponse {
    public byte[] body;
    public PostGetPasswordDataResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetPasswordDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetPasswordDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}