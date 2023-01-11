package openapisdk.models.operations;



public class DeleteMatchmakingRuleSetResponse {
    public String contentType;
    public DeleteMatchmakingRuleSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteMatchmakingRuleSetOutput;
    public DeleteMatchmakingRuleSetResponse withDeleteMatchmakingRuleSetOutput(java.util.Map<String, Object> deleteMatchmakingRuleSetOutput) {
        this.deleteMatchmakingRuleSetOutput = deleteMatchmakingRuleSetOutput;
        return this;
    }
    public Object internalServiceException;
    public DeleteMatchmakingRuleSetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteMatchmakingRuleSetResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DeleteMatchmakingRuleSetResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteMatchmakingRuleSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taggingFailedException;
    public DeleteMatchmakingRuleSetResponse withTaggingFailedException(Object taggingFailedException) {
        this.taggingFailedException = taggingFailedException;
        return this;
    }
    public Object unsupportedRegionException;
    public DeleteMatchmakingRuleSetResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
}