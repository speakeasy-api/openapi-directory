package openapisdk.models.operations;



public class PostSetQueueAttributesResponse {
    public byte[] body;
    public PostSetQueueAttributesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSetQueueAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetQueueAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}