package openapisdk.models.operations;



public class AddInternalTransferBatchPaymentResponse {
    public String contentType;
    public AddInternalTransferBatchPaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public AddInternalTransferBatchPaymentNewBatchItemResponse newBatchItemResponse;
    public AddInternalTransferBatchPaymentResponse withNewBatchItemResponse(AddInternalTransferBatchPaymentNewBatchItemResponse newBatchItemResponse) {
        this.newBatchItemResponse = newBatchItemResponse;
        return this;
    }
    public Long statusCode;
    public AddInternalTransferBatchPaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}