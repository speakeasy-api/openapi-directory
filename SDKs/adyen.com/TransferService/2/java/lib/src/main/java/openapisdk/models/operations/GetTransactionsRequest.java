package openapisdk.models.operations;



public class GetTransactionsRequest {
    public GetTransactionsQueryParams queryParams;
    public GetTransactionsRequest withQueryParams(GetTransactionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTransactionsSecurity security;
    public GetTransactionsRequest withSecurity(GetTransactionsSecurity security) {
        this.security = security;
        return this;
    }
}