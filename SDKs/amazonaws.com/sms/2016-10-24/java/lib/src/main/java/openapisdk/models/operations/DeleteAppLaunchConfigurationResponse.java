package openapisdk.models.operations;



public class DeleteAppLaunchConfigurationResponse {
    public String contentType;
    public DeleteAppLaunchConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAppLaunchConfigurationResponse;
    public DeleteAppLaunchConfigurationResponse withDeleteAppLaunchConfigurationResponse(java.util.Map<String, Object> deleteAppLaunchConfigurationResponse) {
        this.deleteAppLaunchConfigurationResponse = deleteAppLaunchConfigurationResponse;
        return this;
    }
    public Object internalError;
    public DeleteAppLaunchConfigurationResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public DeleteAppLaunchConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public DeleteAppLaunchConfigurationResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public DeleteAppLaunchConfigurationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public DeleteAppLaunchConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public DeleteAppLaunchConfigurationResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}