package openapisdk.models.operations;



public class GetRuleResponse {
    public String contentType;
    public GetRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRuleResponse getRuleResponse;
    public GetRuleResponse withGetRuleResponse(openapisdk.models.shared.GetRuleResponse getRuleResponse) {
        this.getRuleResponse = getRuleResponse;
        return this;
    }
    public Long statusCode;
    public GetRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetRuleResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetRuleResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetRuleResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}