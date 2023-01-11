package openapisdk.models.operations;



public class PostGetGroupResponse {
    public byte[] body;
    public PostGetGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}