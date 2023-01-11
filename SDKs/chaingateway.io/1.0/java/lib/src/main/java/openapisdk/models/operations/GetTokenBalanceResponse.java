package openapisdk.models.operations;



public class GetTokenBalanceResponse {
    public String contentType;
    public GetTokenBalanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTokenBalanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTokenBalance getTokenBalance;
    public GetTokenBalanceResponse withGetTokenBalance(openapisdk.models.shared.GetTokenBalance getTokenBalance) {
        this.getTokenBalance = getTokenBalance;
        return this;
    }
}