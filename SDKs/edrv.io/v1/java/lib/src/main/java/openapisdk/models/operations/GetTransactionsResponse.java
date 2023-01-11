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
    public GetTransactions200ApplicationJson getTransactions200ApplicationJSONObject;
    public GetTransactionsResponse withGetTransactions200ApplicationJsonObject(GetTransactions200ApplicationJson getTransactions200ApplicationJSONObject) {
        this.getTransactions200ApplicationJSONObject = getTransactions200ApplicationJSONObject;
        return this;
    }
}