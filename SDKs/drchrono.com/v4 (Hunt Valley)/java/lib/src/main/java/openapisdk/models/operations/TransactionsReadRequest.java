package openapisdk.models.operations;



public class TransactionsReadRequest {
    public TransactionsReadPathParams pathParams;
    public TransactionsReadRequest withPathParams(TransactionsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TransactionsReadQueryParams queryParams;
    public TransactionsReadRequest withQueryParams(TransactionsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TransactionsReadSecurity security;
    public TransactionsReadRequest withSecurity(TransactionsReadSecurity security) {
        this.security = security;
        return this;
    }
}