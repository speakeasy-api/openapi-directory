package openapisdk.models.operations;



public class PostAssociateDataShareConsumerResponse {
    public byte[] body;
    public PostAssociateDataShareConsumerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAssociateDataShareConsumerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssociateDataShareConsumerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}