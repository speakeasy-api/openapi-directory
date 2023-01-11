package openapisdk.models.operations;



public class GetAccountHoldersIdBalanceAccountsResponse {
    public String contentType;
    public GetAccountHoldersIdBalanceAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object paginatedBalanceAccountsResponse;
    public GetAccountHoldersIdBalanceAccountsResponse withPaginatedBalanceAccountsResponse(Object paginatedBalanceAccountsResponse) {
        this.paginatedBalanceAccountsResponse = paginatedBalanceAccountsResponse;
        return this;
    }
    public Object restServiceError;
    public GetAccountHoldersIdBalanceAccountsResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public GetAccountHoldersIdBalanceAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}