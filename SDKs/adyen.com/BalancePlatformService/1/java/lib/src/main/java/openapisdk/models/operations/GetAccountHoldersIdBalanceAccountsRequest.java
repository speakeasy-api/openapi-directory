package openapisdk.models.operations;



public class GetAccountHoldersIdBalanceAccountsRequest {
    public GetAccountHoldersIdBalanceAccountsPathParams pathParams;
    public GetAccountHoldersIdBalanceAccountsRequest withPathParams(GetAccountHoldersIdBalanceAccountsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccountHoldersIdBalanceAccountsQueryParams queryParams;
    public GetAccountHoldersIdBalanceAccountsRequest withQueryParams(GetAccountHoldersIdBalanceAccountsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAccountHoldersIdBalanceAccountsSecurity security;
    public GetAccountHoldersIdBalanceAccountsRequest withSecurity(GetAccountHoldersIdBalanceAccountsSecurity security) {
        this.security = security;
        return this;
    }
}