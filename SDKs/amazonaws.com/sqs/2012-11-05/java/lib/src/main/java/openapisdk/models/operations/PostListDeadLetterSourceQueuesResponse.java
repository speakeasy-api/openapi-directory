package openapisdk.models.operations;



public class PostListDeadLetterSourceQueuesResponse {
    public byte[] body;
    public PostListDeadLetterSourceQueuesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostListDeadLetterSourceQueuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostListDeadLetterSourceQueuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}