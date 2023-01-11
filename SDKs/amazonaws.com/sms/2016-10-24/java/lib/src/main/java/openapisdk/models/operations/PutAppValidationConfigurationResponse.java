package openapisdk.models.operations;



public class PutAppValidationConfigurationResponse {
    public String contentType;
    public PutAppValidationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalError;
    public PutAppValidationConfigurationResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public PutAppValidationConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public PutAppValidationConfigurationResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public PutAppValidationConfigurationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public java.util.Map<String, Object> putAppValidationConfigurationResponse;
    public PutAppValidationConfigurationResponse withPutAppValidationConfigurationResponse(java.util.Map<String, Object> putAppValidationConfigurationResponse) {
        this.putAppValidationConfigurationResponse = putAppValidationConfigurationResponse;
        return this;
    }
    public Long statusCode;
    public PutAppValidationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public PutAppValidationConfigurationResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}