package openapisdk.models.operations;



public class ListApplicationStatesResponse {
    public Object accessDeniedException;
    public ListApplicationStatesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListApplicationStatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public ListApplicationStatesResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public ListApplicationStatesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public ListApplicationStatesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListApplicationStatesResult listApplicationStatesResult;
    public ListApplicationStatesResponse withListApplicationStatesResult(openapisdk.models.shared.ListApplicationStatesResult listApplicationStatesResult) {
        this.listApplicationStatesResult = listApplicationStatesResult;
        return this;
    }
    public Object serviceUnavailableException;
    public ListApplicationStatesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListApplicationStatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListApplicationStatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}