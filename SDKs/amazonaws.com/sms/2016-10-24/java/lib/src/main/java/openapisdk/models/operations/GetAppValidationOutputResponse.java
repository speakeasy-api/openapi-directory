package openapisdk.models.operations;



public class GetAppValidationOutputResponse {
    public String contentType;
    public GetAppValidationOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAppValidationOutputResponse getAppValidationOutputResponse;
    public GetAppValidationOutputResponse withGetAppValidationOutputResponse(openapisdk.models.shared.GetAppValidationOutputResponse getAppValidationOutputResponse) {
        this.getAppValidationOutputResponse = getAppValidationOutputResponse;
        return this;
    }
    public Object internalError;
    public GetAppValidationOutputResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public GetAppValidationOutputResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public GetAppValidationOutputResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public GetAppValidationOutputResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public GetAppValidationOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public GetAppValidationOutputResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}