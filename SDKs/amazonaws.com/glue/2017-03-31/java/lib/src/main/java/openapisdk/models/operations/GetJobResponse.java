package openapisdk.models.operations;



public class GetJobResponse {
    public String contentType;
    public GetJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetJobResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetJobResponse getJobResponse;
    public GetJobResponse withGetJobResponse(openapisdk.models.shared.GetJobResponse getJobResponse) {
        this.getJobResponse = getJobResponse;
        return this;
    }
    public Object internalServiceException;
    public GetJobResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetJobResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}