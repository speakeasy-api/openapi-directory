package openapisdk.models.operations;



public class CreateMatchmakingRuleSetResponse {
    public String contentType;
    public CreateMatchmakingRuleSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateMatchmakingRuleSetOutput createMatchmakingRuleSetOutput;
    public CreateMatchmakingRuleSetResponse withCreateMatchmakingRuleSetOutput(openapisdk.models.shared.CreateMatchmakingRuleSetOutput createMatchmakingRuleSetOutput) {
        this.createMatchmakingRuleSetOutput = createMatchmakingRuleSetOutput;
        return this;
    }
    public Object internalServiceException;
    public CreateMatchmakingRuleSetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public CreateMatchmakingRuleSetResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateMatchmakingRuleSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taggingFailedException;
    public CreateMatchmakingRuleSetResponse withTaggingFailedException(Object taggingFailedException) {
        this.taggingFailedException = taggingFailedException;
        return this;
    }
    public Object unsupportedRegionException;
    public CreateMatchmakingRuleSetResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
}