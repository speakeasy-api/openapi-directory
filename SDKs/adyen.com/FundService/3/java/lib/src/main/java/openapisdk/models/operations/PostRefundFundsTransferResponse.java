package openapisdk.models.operations;



public class PostRefundFundsTransferResponse {
    public String contentType;
    public PostRefundFundsTransferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object refundFundsTransferResponse;
    public PostRefundFundsTransferResponse withRefundFundsTransferResponse(Object refundFundsTransferResponse) {
        this.refundFundsTransferResponse = refundFundsTransferResponse;
        return this;
    }
    public Object serviceError;
    public PostRefundFundsTransferResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostRefundFundsTransferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}