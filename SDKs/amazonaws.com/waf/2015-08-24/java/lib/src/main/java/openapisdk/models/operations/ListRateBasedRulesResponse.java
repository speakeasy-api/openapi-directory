package openapisdk.models.operations;



public class ListRateBasedRulesResponse {
    public String contentType;
    public ListRateBasedRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRateBasedRulesResponse listRateBasedRulesResponse;
    public ListRateBasedRulesResponse withListRateBasedRulesResponse(openapisdk.models.shared.ListRateBasedRulesResponse listRateBasedRulesResponse) {
        this.listRateBasedRulesResponse = listRateBasedRulesResponse;
        return this;
    }
    public Long statusCode;
    public ListRateBasedRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListRateBasedRulesResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public ListRateBasedRulesResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
}