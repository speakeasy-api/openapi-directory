package openapisdk.models.operations;



public class ResetJobBookmarkResponse {
    public String contentType;
    public ResetJobBookmarkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public ResetJobBookmarkResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public ResetJobBookmarkResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ResetJobBookmarkResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public ResetJobBookmarkResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public openapisdk.models.shared.ResetJobBookmarkResponse resetJobBookmarkResponse;
    public ResetJobBookmarkResponse withResetJobBookmarkResponse(openapisdk.models.shared.ResetJobBookmarkResponse resetJobBookmarkResponse) {
        this.resetJobBookmarkResponse = resetJobBookmarkResponse;
        return this;
    }
    public Long statusCode;
    public ResetJobBookmarkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}