package openapisdk.models.operations;



public class PostBalanceAccountsResponse {
    public Object balanceAccount;
    public PostBalanceAccountsResponse withBalanceAccount(Object balanceAccount) {
        this.balanceAccount = balanceAccount;
        return this;
    }
    public String contentType;
    public PostBalanceAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public PostBalanceAccountsResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public PostBalanceAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}