package openapisdk.models.operations;



public class DeleteAppReplicationConfigurationResponse {
    public String contentType;
    public DeleteAppReplicationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAppReplicationConfigurationResponse;
    public DeleteAppReplicationConfigurationResponse withDeleteAppReplicationConfigurationResponse(java.util.Map<String, Object> deleteAppReplicationConfigurationResponse) {
        this.deleteAppReplicationConfigurationResponse = deleteAppReplicationConfigurationResponse;
        return this;
    }
    public Object internalError;
    public DeleteAppReplicationConfigurationResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public DeleteAppReplicationConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public DeleteAppReplicationConfigurationResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public DeleteAppReplicationConfigurationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public DeleteAppReplicationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public DeleteAppReplicationConfigurationResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}