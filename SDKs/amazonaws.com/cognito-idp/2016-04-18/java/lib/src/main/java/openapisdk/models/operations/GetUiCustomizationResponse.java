package openapisdk.models.operations;



public class GetUiCustomizationResponse {
    public String contentType;
    public GetUiCustomizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetUiCustomizationResponse getUICustomizationResponse;
    public GetUiCustomizationResponse withGetUiCustomizationResponse(openapisdk.models.shared.GetUiCustomizationResponse getUICustomizationResponse) {
        this.getUICustomizationResponse = getUICustomizationResponse;
        return this;
    }
    public Object internalErrorException;
    public GetUiCustomizationResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetUiCustomizationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public GetUiCustomizationResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetUiCustomizationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetUiCustomizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetUiCustomizationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}