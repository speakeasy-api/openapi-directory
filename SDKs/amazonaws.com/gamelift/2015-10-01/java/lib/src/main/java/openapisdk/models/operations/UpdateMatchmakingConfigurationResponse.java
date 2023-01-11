package openapisdk.models.operations;



public class UpdateMatchmakingConfigurationResponse {
    public String contentType;
    public UpdateMatchmakingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateMatchmakingConfigurationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateMatchmakingConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public UpdateMatchmakingConfigurationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateMatchmakingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedRegionException;
    public UpdateMatchmakingConfigurationResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
    public openapisdk.models.shared.UpdateMatchmakingConfigurationOutput updateMatchmakingConfigurationOutput;
    public UpdateMatchmakingConfigurationResponse withUpdateMatchmakingConfigurationOutput(openapisdk.models.shared.UpdateMatchmakingConfigurationOutput updateMatchmakingConfigurationOutput) {
        this.updateMatchmakingConfigurationOutput = updateMatchmakingConfigurationOutput;
        return this;
    }
}