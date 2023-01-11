package openapisdk.models.operations;



public class GetRateBasedRuleResponse {
    public String contentType;
    public GetRateBasedRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRateBasedRuleResponse getRateBasedRuleResponse;
    public GetRateBasedRuleResponse withGetRateBasedRuleResponse(openapisdk.models.shared.GetRateBasedRuleResponse getRateBasedRuleResponse) {
        this.getRateBasedRuleResponse = getRateBasedRuleResponse;
        return this;
    }
    public Long statusCode;
    public GetRateBasedRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetRateBasedRuleResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetRateBasedRuleResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetRateBasedRuleResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}