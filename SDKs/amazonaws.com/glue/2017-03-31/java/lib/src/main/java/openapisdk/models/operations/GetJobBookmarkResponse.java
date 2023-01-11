package openapisdk.models.operations;



public class GetJobBookmarkResponse {
    public String contentType;
    public GetJobBookmarkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetJobBookmarkResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetJobBookmarkResponse getJobBookmarkResponse;
    public GetJobBookmarkResponse withGetJobBookmarkResponse(openapisdk.models.shared.GetJobBookmarkResponse getJobBookmarkResponse) {
        this.getJobBookmarkResponse = getJobBookmarkResponse;
        return this;
    }
    public Object internalServiceException;
    public GetJobBookmarkResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetJobBookmarkResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetJobBookmarkResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetJobBookmarkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetJobBookmarkResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}