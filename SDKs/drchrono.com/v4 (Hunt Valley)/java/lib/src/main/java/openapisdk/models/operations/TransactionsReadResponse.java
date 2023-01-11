package openapisdk.models.operations;



public class TransactionsReadResponse {
    public String contentType;
    public TransactionsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LineItemTransaction lineItemTransaction;
    public TransactionsReadResponse withLineItemTransaction(openapisdk.models.shared.LineItemTransaction lineItemTransaction) {
        this.lineItemTransaction = lineItemTransaction;
        return this;
    }
    public Long statusCode;
    public TransactionsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}