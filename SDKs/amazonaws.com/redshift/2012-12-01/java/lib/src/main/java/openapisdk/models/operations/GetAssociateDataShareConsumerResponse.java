package openapisdk.models.operations;



public class GetAssociateDataShareConsumerResponse {
    public byte[] body;
    public GetAssociateDataShareConsumerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAssociateDataShareConsumerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssociateDataShareConsumerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}