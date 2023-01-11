package openapisdk.models.operations;



public class StartOnDemandAppReplicationResponse {
    public String contentType;
    public StartOnDemandAppReplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalError;
    public StartOnDemandAppReplicationResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public StartOnDemandAppReplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public StartOnDemandAppReplicationResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public StartOnDemandAppReplicationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public java.util.Map<String, Object> startOnDemandAppReplicationResponse;
    public StartOnDemandAppReplicationResponse withStartOnDemandAppReplicationResponse(java.util.Map<String, Object> startOnDemandAppReplicationResponse) {
        this.startOnDemandAppReplicationResponse = startOnDemandAppReplicationResponse;
        return this;
    }
    public Long statusCode;
    public StartOnDemandAppReplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public StartOnDemandAppReplicationResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}