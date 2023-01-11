package openapisdk.models.operations;



public class GetAccountsResponse {
    public GetAccountsAccounts accounts;
    public GetAccountsResponse withAccounts(GetAccountsAccounts accounts) {
        this.accounts = accounts;
        return this;
    }
    public String contentType;
    public GetAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}