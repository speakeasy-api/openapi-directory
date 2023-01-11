package openapisdk.models.operations;



public class UpdateRuleGroupResponse {
    public String contentType;
    public UpdateRuleGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRuleGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateRuleGroupResponse updateRuleGroupResponse;
    public UpdateRuleGroupResponse withUpdateRuleGroupResponse(openapisdk.models.shared.UpdateRuleGroupResponse updateRuleGroupResponse) {
        this.updateRuleGroupResponse = updateRuleGroupResponse;
        return this;
    }
    public Object wafInternalErrorException;
    public UpdateRuleGroupResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidOperationException;
    public UpdateRuleGroupResponse withWafInvalidOperationException(Object wafInvalidOperationException) {
        this.wafInvalidOperationException = wafInvalidOperationException;
        return this;
    }
    public Object wafInvalidParameterException;
    public UpdateRuleGroupResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafLimitsExceededException;
    public UpdateRuleGroupResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafNonexistentContainerException;
    public UpdateRuleGroupResponse withWafNonexistentContainerException(Object wafNonexistentContainerException) {
        this.wafNonexistentContainerException = wafNonexistentContainerException;
        return this;
    }
    public Object wafNonexistentItemException;
    public UpdateRuleGroupResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafStaleDataException;
    public UpdateRuleGroupResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}