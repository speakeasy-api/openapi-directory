package openapisdk.models.operations;



public class GetAccountBalanceResponse {
    public String contentType;
    public GetAccountBalanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountBalanceResponse getAccountBalanceResponse;
    public GetAccountBalanceResponse withGetAccountBalanceResponse(openapisdk.models.shared.GetAccountBalanceResponse getAccountBalanceResponse) {
        this.getAccountBalanceResponse = getAccountBalanceResponse;
        return this;
    }
    public Object requestError;
    public GetAccountBalanceResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public GetAccountBalanceResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public GetAccountBalanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}