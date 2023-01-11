package openapisdk.models.operations;



public class PostGetShippingLabelResponse {
    public byte[] body;
    public PostGetShippingLabelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetShippingLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetShippingLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}