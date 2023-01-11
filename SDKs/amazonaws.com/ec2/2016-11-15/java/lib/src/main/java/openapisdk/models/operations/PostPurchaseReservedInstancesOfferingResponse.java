package openapisdk.models.operations;



public class PostPurchaseReservedInstancesOfferingResponse {
    public byte[] body;
    public PostPurchaseReservedInstancesOfferingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPurchaseReservedInstancesOfferingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPurchaseReservedInstancesOfferingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}