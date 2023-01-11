package openapisdk.models.operations;



public class TransactionsListResponse {
    public String contentType;
    public TransactionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TransactionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TransactionsList200ApplicationJson transactionsList200ApplicationJSONObject;
    public TransactionsListResponse withTransactionsList200ApplicationJsonObject(TransactionsList200ApplicationJson transactionsList200ApplicationJSONObject) {
        this.transactionsList200ApplicationJSONObject = transactionsList200ApplicationJSONObject;
        return this;
    }
}