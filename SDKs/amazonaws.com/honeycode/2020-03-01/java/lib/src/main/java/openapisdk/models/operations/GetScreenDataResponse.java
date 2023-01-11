package openapisdk.models.operations;



public class GetScreenDataResponse {
    public Object accessDeniedException;
    public GetScreenDataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetScreenDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetScreenDataResult getScreenDataResult;
    public GetScreenDataResponse withGetScreenDataResult(openapisdk.models.shared.GetScreenDataResult getScreenDataResult) {
        this.getScreenDataResult = getScreenDataResult;
        return this;
    }
    public Object internalServerException;
    public GetScreenDataResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object requestTimeoutException;
    public GetScreenDataResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetScreenDataResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetScreenDataResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetScreenDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetScreenDataResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetScreenDataResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}