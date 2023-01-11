package openapisdk.models.operations;



public class DeleteAppValidationConfigurationResponse {
    public String contentType;
    public DeleteAppValidationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAppValidationConfigurationResponse;
    public DeleteAppValidationConfigurationResponse withDeleteAppValidationConfigurationResponse(java.util.Map<String, Object> deleteAppValidationConfigurationResponse) {
        this.deleteAppValidationConfigurationResponse = deleteAppValidationConfigurationResponse;
        return this;
    }
    public Object internalError;
    public DeleteAppValidationConfigurationResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public DeleteAppValidationConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public DeleteAppValidationConfigurationResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public DeleteAppValidationConfigurationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public DeleteAppValidationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public DeleteAppValidationConfigurationResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}