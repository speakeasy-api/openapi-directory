package openapisdk.models.operations;



public class StopAppReplicationResponse {
    public String contentType;
    public StopAppReplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalError;
    public StopAppReplicationResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public StopAppReplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public StopAppReplicationResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public StopAppReplicationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public StopAppReplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopAppReplicationResponse;
    public StopAppReplicationResponse withStopAppReplicationResponse(java.util.Map<String, Object> stopAppReplicationResponse) {
        this.stopAppReplicationResponse = stopAppReplicationResponse;
        return this;
    }
    public Object unauthorizedOperationException;
    public StopAppReplicationResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}