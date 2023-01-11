package openapisdk.models.operations;



public class GetAppLaunchConfigurationResponse {
    public String contentType;
    public GetAppLaunchConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAppLaunchConfigurationResponse getAppLaunchConfigurationResponse;
    public GetAppLaunchConfigurationResponse withGetAppLaunchConfigurationResponse(openapisdk.models.shared.GetAppLaunchConfigurationResponse getAppLaunchConfigurationResponse) {
        this.getAppLaunchConfigurationResponse = getAppLaunchConfigurationResponse;
        return this;
    }
    public Object internalError;
    public GetAppLaunchConfigurationResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public GetAppLaunchConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public GetAppLaunchConfigurationResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public GetAppLaunchConfigurationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public GetAppLaunchConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public GetAppLaunchConfigurationResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}