package openapisdk.models.operations;



public class PostGetQueueAttributesResponse {
    public byte[] body;
    public PostGetQueueAttributesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetQueueAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetQueueAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}