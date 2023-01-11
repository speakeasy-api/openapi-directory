package openapisdk.models.operations;



public class PutAppLaunchConfigurationResponse {
    public String contentType;
    public PutAppLaunchConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalError;
    public PutAppLaunchConfigurationResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public PutAppLaunchConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public PutAppLaunchConfigurationResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public PutAppLaunchConfigurationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public java.util.Map<String, Object> putAppLaunchConfigurationResponse;
    public PutAppLaunchConfigurationResponse withPutAppLaunchConfigurationResponse(java.util.Map<String, Object> putAppLaunchConfigurationResponse) {
        this.putAppLaunchConfigurationResponse = putAppLaunchConfigurationResponse;
        return this;
    }
    public Long statusCode;
    public PutAppLaunchConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public PutAppLaunchConfigurationResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}