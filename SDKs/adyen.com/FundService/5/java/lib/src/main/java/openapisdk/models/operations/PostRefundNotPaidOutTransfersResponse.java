package openapisdk.models.operations;



public class PostRefundNotPaidOutTransfersResponse {
    public String contentType;
    public PostRefundNotPaidOutTransfersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object refundNotPaidOutTransfersResponse;
    public PostRefundNotPaidOutTransfersResponse withRefundNotPaidOutTransfersResponse(Object refundNotPaidOutTransfersResponse) {
        this.refundNotPaidOutTransfersResponse = refundNotPaidOutTransfersResponse;
        return this;
    }
    public Object serviceError;
    public PostRefundNotPaidOutTransfersResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostRefundNotPaidOutTransfersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}