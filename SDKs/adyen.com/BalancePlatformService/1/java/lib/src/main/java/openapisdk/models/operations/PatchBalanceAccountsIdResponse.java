package openapisdk.models.operations;



public class PatchBalanceAccountsIdResponse {
    public Object balanceAccount;
    public PatchBalanceAccountsIdResponse withBalanceAccount(Object balanceAccount) {
        this.balanceAccount = balanceAccount;
        return this;
    }
    public String contentType;
    public PatchBalanceAccountsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public PatchBalanceAccountsIdResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public PatchBalanceAccountsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}