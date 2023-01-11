package openapisdk.models.operations;



public class GetJobRunsResponse {
    public String contentType;
    public GetJobRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetJobRunsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetJobRunsResponse getJobRunsResponse;
    public GetJobRunsResponse withGetJobRunsResponse(openapisdk.models.shared.GetJobRunsResponse getJobRunsResponse) {
        this.getJobRunsResponse = getJobRunsResponse;
        return this;
    }
    public Object internalServiceException;
    public GetJobRunsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetJobRunsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetJobRunsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetJobRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}