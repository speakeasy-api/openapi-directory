package openapisdk.models.operations;



public class GetTransactionsResponse {
    public String contentType;
    public GetTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Transactions transactions;
    public GetTransactionsResponse withTransactions(openapisdk.models.shared.Transactions transactions) {
        this.transactions = transactions;
        return this;
    }
}