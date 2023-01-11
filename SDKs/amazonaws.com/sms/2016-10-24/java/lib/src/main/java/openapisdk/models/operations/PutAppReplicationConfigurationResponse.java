package openapisdk.models.operations;



public class PutAppReplicationConfigurationResponse {
    public String contentType;
    public PutAppReplicationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalError;
    public PutAppReplicationConfigurationResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public PutAppReplicationConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public PutAppReplicationConfigurationResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public PutAppReplicationConfigurationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public java.util.Map<String, Object> putAppReplicationConfigurationResponse;
    public PutAppReplicationConfigurationResponse withPutAppReplicationConfigurationResponse(java.util.Map<String, Object> putAppReplicationConfigurationResponse) {
        this.putAppReplicationConfigurationResponse = putAppReplicationConfigurationResponse;
        return this;
    }
    public Long statusCode;
    public PutAppReplicationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public PutAppReplicationConfigurationResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}