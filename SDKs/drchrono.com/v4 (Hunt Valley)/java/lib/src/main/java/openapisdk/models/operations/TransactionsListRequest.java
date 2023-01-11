package openapisdk.models.operations;



public class TransactionsListRequest {
    public TransactionsListQueryParams queryParams;
    public TransactionsListRequest withQueryParams(TransactionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TransactionsListSecurity security;
    public TransactionsListRequest withSecurity(TransactionsListSecurity security) {
        this.security = security;
        return this;
    }
}