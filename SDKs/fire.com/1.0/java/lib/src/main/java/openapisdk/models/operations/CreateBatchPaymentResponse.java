package openapisdk.models.operations;



public class CreateBatchPaymentResponse {
    public String contentType;
    public CreateBatchPaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public CreateBatchPaymentNewBatchResponse newBatchResponse;
    public CreateBatchPaymentResponse withNewBatchResponse(CreateBatchPaymentNewBatchResponse newBatchResponse) {
        this.newBatchResponse = newBatchResponse;
        return this;
    }
    public Long statusCode;
    public CreateBatchPaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}