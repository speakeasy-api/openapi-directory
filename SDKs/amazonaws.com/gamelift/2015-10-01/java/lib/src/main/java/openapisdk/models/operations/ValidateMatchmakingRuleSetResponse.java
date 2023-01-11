package openapisdk.models.operations;



public class ValidateMatchmakingRuleSetResponse {
    public String contentType;
    public ValidateMatchmakingRuleSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ValidateMatchmakingRuleSetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public ValidateMatchmakingRuleSetResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public ValidateMatchmakingRuleSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedRegionException;
    public ValidateMatchmakingRuleSetResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
    public openapisdk.models.shared.ValidateMatchmakingRuleSetOutput validateMatchmakingRuleSetOutput;
    public ValidateMatchmakingRuleSetResponse withValidateMatchmakingRuleSetOutput(openapisdk.models.shared.ValidateMatchmakingRuleSetOutput validateMatchmakingRuleSetOutput) {
        this.validateMatchmakingRuleSetOutput = validateMatchmakingRuleSetOutput;
        return this;
    }
}