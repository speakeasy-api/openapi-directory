package openapisdk.models.operations;



public class CreateRateBasedRuleResponse {
    public String contentType;
    public CreateRateBasedRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRateBasedRuleResponse createRateBasedRuleResponse;
    public CreateRateBasedRuleResponse withCreateRateBasedRuleResponse(openapisdk.models.shared.CreateRateBasedRuleResponse createRateBasedRuleResponse) {
        this.createRateBasedRuleResponse = createRateBasedRuleResponse;
        return this;
    }
    public Long statusCode;
    public CreateRateBasedRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafBadRequestException;
    public CreateRateBasedRuleResponse withWafBadRequestException(Object wafBadRequestException) {
        this.wafBadRequestException = wafBadRequestException;
        return this;
    }
    public Object wafDisallowedNameException;
    public CreateRateBasedRuleResponse withWafDisallowedNameException(Object wafDisallowedNameException) {
        this.wafDisallowedNameException = wafDisallowedNameException;
        return this;
    }
    public Object wafInternalErrorException;
    public CreateRateBasedRuleResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidParameterException;
    public CreateRateBasedRuleResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafLimitsExceededException;
    public CreateRateBasedRuleResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafStaleDataException;
    public CreateRateBasedRuleResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
    public Object wafTagOperationException;
    public CreateRateBasedRuleResponse withWafTagOperationException(Object wafTagOperationException) {
        this.wafTagOperationException = wafTagOperationException;
        return this;
    }
    public Object wafTagOperationInternalErrorException;
    public CreateRateBasedRuleResponse withWafTagOperationInternalErrorException(Object wafTagOperationInternalErrorException) {
        this.wafTagOperationInternalErrorException = wafTagOperationInternalErrorException;
        return this;
    }
}