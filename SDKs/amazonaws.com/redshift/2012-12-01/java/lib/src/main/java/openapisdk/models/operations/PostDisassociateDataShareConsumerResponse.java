package openapisdk.models.operations;



public class PostDisassociateDataShareConsumerResponse {
    public byte[] body;
    public PostDisassociateDataShareConsumerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDisassociateDataShareConsumerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDisassociateDataShareConsumerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}