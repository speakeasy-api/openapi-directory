package openapisdk.models.operations;



public class GetAppReplicationConfigurationResponse {
    public String contentType;
    public GetAppReplicationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAppReplicationConfigurationResponse getAppReplicationConfigurationResponse;
    public GetAppReplicationConfigurationResponse withGetAppReplicationConfigurationResponse(openapisdk.models.shared.GetAppReplicationConfigurationResponse getAppReplicationConfigurationResponse) {
        this.getAppReplicationConfigurationResponse = getAppReplicationConfigurationResponse;
        return this;
    }
    public Object internalError;
    public GetAppReplicationConfigurationResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public GetAppReplicationConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public GetAppReplicationConfigurationResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public GetAppReplicationConfigurationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public GetAppReplicationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public GetAppReplicationConfigurationResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}