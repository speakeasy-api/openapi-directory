package openapisdk.models.operations;



public class UpdateRateBasedRuleResponse {
    public String contentType;
    public UpdateRateBasedRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRateBasedRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateRateBasedRuleResponse updateRateBasedRuleResponse;
    public UpdateRateBasedRuleResponse withUpdateRateBasedRuleResponse(openapisdk.models.shared.UpdateRateBasedRuleResponse updateRateBasedRuleResponse) {
        this.updateRateBasedRuleResponse = updateRateBasedRuleResponse;
        return this;
    }
    public Object wafInternalErrorException;
    public UpdateRateBasedRuleResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public UpdateRateBasedRuleResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidOperationException;
    public UpdateRateBasedRuleResponse withWafInvalidOperationException(Object wafInvalidOperationException) {
        this.wafInvalidOperationException = wafInvalidOperationException;
        return this;
    }
    public Object wafInvalidParameterException;
    public UpdateRateBasedRuleResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafLimitsExceededException;
    public UpdateRateBasedRuleResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafNonexistentContainerException;
    public UpdateRateBasedRuleResponse withWafNonexistentContainerException(Object wafNonexistentContainerException) {
        this.wafNonexistentContainerException = wafNonexistentContainerException;
        return this;
    }
    public Object wafNonexistentItemException;
    public UpdateRateBasedRuleResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafReferencedItemException;
    public UpdateRateBasedRuleResponse withWafReferencedItemException(Object wafReferencedItemException) {
        this.wafReferencedItemException = wafReferencedItemException;
        return this;
    }
    public Object wafStaleDataException;
    public UpdateRateBasedRuleResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}