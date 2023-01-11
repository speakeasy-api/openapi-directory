package openapisdk.models.operations;



public class CreateRuleGroupResponse {
    public String contentType;
    public CreateRuleGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRuleGroupResponse createRuleGroupResponse;
    public CreateRuleGroupResponse withCreateRuleGroupResponse(openapisdk.models.shared.CreateRuleGroupResponse createRuleGroupResponse) {
        this.createRuleGroupResponse = createRuleGroupResponse;
        return this;
    }
    public Long statusCode;
    public CreateRuleGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafBadRequestException;
    public CreateRuleGroupResponse withWafBadRequestException(Object wafBadRequestException) {
        this.wafBadRequestException = wafBadRequestException;
        return this;
    }
    public Object wafDisallowedNameException;
    public CreateRuleGroupResponse withWafDisallowedNameException(Object wafDisallowedNameException) {
        this.wafDisallowedNameException = wafDisallowedNameException;
        return this;
    }
    public Object wafInternalErrorException;
    public CreateRuleGroupResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafLimitsExceededException;
    public CreateRuleGroupResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafStaleDataException;
    public CreateRuleGroupResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
    public Object wafTagOperationException;
    public CreateRuleGroupResponse withWafTagOperationException(Object wafTagOperationException) {
        this.wafTagOperationException = wafTagOperationException;
        return this;
    }
    public Object wafTagOperationInternalErrorException;
    public CreateRuleGroupResponse withWafTagOperationInternalErrorException(Object wafTagOperationInternalErrorException) {
        this.wafTagOperationInternalErrorException = wafTagOperationInternalErrorException;
        return this;
    }
}