package openapisdk.models.operations;



public class GetJobsResponse {
    public String contentType;
    public GetJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetJobsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetJobsResponse getJobsResponse;
    public GetJobsResponse withGetJobsResponse(openapisdk.models.shared.GetJobsResponse getJobsResponse) {
        this.getJobsResponse = getJobsResponse;
        return this;
    }
    public Object internalServiceException;
    public GetJobsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetJobsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetJobsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}