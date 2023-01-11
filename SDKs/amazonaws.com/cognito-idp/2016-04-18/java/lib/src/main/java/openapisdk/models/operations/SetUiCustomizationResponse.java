package openapisdk.models.operations;



public class SetUiCustomizationResponse {
    public String contentType;
    public SetUiCustomizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public SetUiCustomizationResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public SetUiCustomizationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public SetUiCustomizationResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public SetUiCustomizationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SetUiCustomizationResponse setUICustomizationResponse;
    public SetUiCustomizationResponse withSetUiCustomizationResponse(openapisdk.models.shared.SetUiCustomizationResponse setUICustomizationResponse) {
        this.setUICustomizationResponse = setUICustomizationResponse;
        return this;
    }
    public Long statusCode;
    public SetUiCustomizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public SetUiCustomizationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}