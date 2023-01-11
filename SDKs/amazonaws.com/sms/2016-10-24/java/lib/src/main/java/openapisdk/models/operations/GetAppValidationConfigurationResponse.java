package openapisdk.models.operations;



public class GetAppValidationConfigurationResponse {
    public String contentType;
    public GetAppValidationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAppValidationConfigurationResponse getAppValidationConfigurationResponse;
    public GetAppValidationConfigurationResponse withGetAppValidationConfigurationResponse(openapisdk.models.shared.GetAppValidationConfigurationResponse getAppValidationConfigurationResponse) {
        this.getAppValidationConfigurationResponse = getAppValidationConfigurationResponse;
        return this;
    }
    public Object internalError;
    public GetAppValidationConfigurationResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public GetAppValidationConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public GetAppValidationConfigurationResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public GetAppValidationConfigurationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public GetAppValidationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public GetAppValidationConfigurationResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}