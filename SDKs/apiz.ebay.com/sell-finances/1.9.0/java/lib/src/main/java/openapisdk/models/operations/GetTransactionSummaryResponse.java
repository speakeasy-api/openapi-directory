package openapisdk.models.operations;



public class GetTransactionSummaryResponse {
    public String contentType;
    public GetTransactionSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTransactionSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransactionSummaryResponse transactionSummaryResponse;
    public GetTransactionSummaryResponse withTransactionSummaryResponse(openapisdk.models.shared.TransactionSummaryResponse transactionSummaryResponse) {
        this.transactionSummaryResponse = transactionSummaryResponse;
        return this;
    }
}