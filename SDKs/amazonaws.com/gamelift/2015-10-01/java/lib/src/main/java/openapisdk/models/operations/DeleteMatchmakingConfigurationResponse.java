package openapisdk.models.operations;



public class DeleteMatchmakingConfigurationResponse {
    public String contentType;
    public DeleteMatchmakingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteMatchmakingConfigurationOutput;
    public DeleteMatchmakingConfigurationResponse withDeleteMatchmakingConfigurationOutput(java.util.Map<String, Object> deleteMatchmakingConfigurationOutput) {
        this.deleteMatchmakingConfigurationOutput = deleteMatchmakingConfigurationOutput;
        return this;
    }
    public Object internalServiceException;
    public DeleteMatchmakingConfigurationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteMatchmakingConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DeleteMatchmakingConfigurationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteMatchmakingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taggingFailedException;
    public DeleteMatchmakingConfigurationResponse withTaggingFailedException(Object taggingFailedException) {
        this.taggingFailedException = taggingFailedException;
        return this;
    }
    public Object unsupportedRegionException;
    public DeleteMatchmakingConfigurationResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
}