package openapisdk.models.operations;



public class TerminateAppResponse {
    public String contentType;
    public TerminateAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalError;
    public TerminateAppResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public TerminateAppResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public TerminateAppResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public TerminateAppResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public TerminateAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> terminateAppResponse;
    public TerminateAppResponse withTerminateAppResponse(java.util.Map<String, Object> terminateAppResponse) {
        this.terminateAppResponse = terminateAppResponse;
        return this;
    }
    public Object unauthorizedOperationException;
    public TerminateAppResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}