package openapisdk.models.operations;



public class ListProgressUpdateStreamsResponse {
    public Object accessDeniedException;
    public ListProgressUpdateStreamsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListProgressUpdateStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public ListProgressUpdateStreamsResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public ListProgressUpdateStreamsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public ListProgressUpdateStreamsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListProgressUpdateStreamsResult listProgressUpdateStreamsResult;
    public ListProgressUpdateStreamsResponse withListProgressUpdateStreamsResult(openapisdk.models.shared.ListProgressUpdateStreamsResult listProgressUpdateStreamsResult) {
        this.listProgressUpdateStreamsResult = listProgressUpdateStreamsResult;
        return this;
    }
    public Object serviceUnavailableException;
    public ListProgressUpdateStreamsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListProgressUpdateStreamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListProgressUpdateStreamsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}