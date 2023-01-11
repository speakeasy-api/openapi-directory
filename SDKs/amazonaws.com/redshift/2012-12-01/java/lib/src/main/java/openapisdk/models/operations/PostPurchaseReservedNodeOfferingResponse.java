package openapisdk.models.operations;



public class PostPurchaseReservedNodeOfferingResponse {
    public byte[] body;
    public PostPurchaseReservedNodeOfferingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPurchaseReservedNodeOfferingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPurchaseReservedNodeOfferingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}