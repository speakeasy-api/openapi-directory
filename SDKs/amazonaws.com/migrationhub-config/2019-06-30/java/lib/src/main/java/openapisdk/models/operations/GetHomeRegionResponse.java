package openapisdk.models.operations;



public class GetHomeRegionResponse {
    public Object accessDeniedException;
    public GetHomeRegionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetHomeRegionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetHomeRegionResult getHomeRegionResult;
    public GetHomeRegionResponse withGetHomeRegionResult(openapisdk.models.shared.GetHomeRegionResult getHomeRegionResult) {
        this.getHomeRegionResult = getHomeRegionResult;
        return this;
    }
    public Object internalServerError;
    public GetHomeRegionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public GetHomeRegionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetHomeRegionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetHomeRegionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetHomeRegionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}