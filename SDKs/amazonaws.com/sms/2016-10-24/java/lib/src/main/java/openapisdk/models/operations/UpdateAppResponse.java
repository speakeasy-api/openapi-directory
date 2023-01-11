package openapisdk.models.operations;



public class UpdateAppResponse {
    public String contentType;
    public UpdateAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalError;
    public UpdateAppResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public UpdateAppResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public UpdateAppResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public UpdateAppResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public UpdateAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public UpdateAppResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
    public openapisdk.models.shared.UpdateAppResponse updateAppResponse;
    public UpdateAppResponse withUpdateAppResponse(openapisdk.models.shared.UpdateAppResponse updateAppResponse) {
        this.updateAppResponse = updateAppResponse;
        return this;
    }
}