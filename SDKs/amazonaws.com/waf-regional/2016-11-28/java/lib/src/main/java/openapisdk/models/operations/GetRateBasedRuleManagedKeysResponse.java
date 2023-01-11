package openapisdk.models.operations;



public class GetRateBasedRuleManagedKeysResponse {
    public String contentType;
    public GetRateBasedRuleManagedKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRateBasedRuleManagedKeysResponse getRateBasedRuleManagedKeysResponse;
    public GetRateBasedRuleManagedKeysResponse withGetRateBasedRuleManagedKeysResponse(openapisdk.models.shared.GetRateBasedRuleManagedKeysResponse getRateBasedRuleManagedKeysResponse) {
        this.getRateBasedRuleManagedKeysResponse = getRateBasedRuleManagedKeysResponse;
        return this;
    }
    public Long statusCode;
    public GetRateBasedRuleManagedKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetRateBasedRuleManagedKeysResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetRateBasedRuleManagedKeysResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidParameterException;
    public GetRateBasedRuleManagedKeysResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetRateBasedRuleManagedKeysResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}