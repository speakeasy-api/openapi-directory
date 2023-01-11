package openapisdk.models.operations;



public class GetBalanceAccountsIdResponse {
    public Object balanceAccount;
    public GetBalanceAccountsIdResponse withBalanceAccount(Object balanceAccount) {
        this.balanceAccount = balanceAccount;
        return this;
    }
    public String contentType;
    public GetBalanceAccountsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public GetBalanceAccountsIdResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public GetBalanceAccountsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}