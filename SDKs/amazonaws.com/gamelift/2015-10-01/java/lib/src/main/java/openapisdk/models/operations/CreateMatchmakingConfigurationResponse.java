package openapisdk.models.operations;



public class CreateMatchmakingConfigurationResponse {
    public String contentType;
    public CreateMatchmakingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateMatchmakingConfigurationOutput createMatchmakingConfigurationOutput;
    public CreateMatchmakingConfigurationResponse withCreateMatchmakingConfigurationOutput(openapisdk.models.shared.CreateMatchmakingConfigurationOutput createMatchmakingConfigurationOutput) {
        this.createMatchmakingConfigurationOutput = createMatchmakingConfigurationOutput;
        return this;
    }
    public Object internalServiceException;
    public CreateMatchmakingConfigurationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public CreateMatchmakingConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateMatchmakingConfigurationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateMatchmakingConfigurationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateMatchmakingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taggingFailedException;
    public CreateMatchmakingConfigurationResponse withTaggingFailedException(Object taggingFailedException) {
        this.taggingFailedException = taggingFailedException;
        return this;
    }
    public Object unsupportedRegionException;
    public CreateMatchmakingConfigurationResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
}