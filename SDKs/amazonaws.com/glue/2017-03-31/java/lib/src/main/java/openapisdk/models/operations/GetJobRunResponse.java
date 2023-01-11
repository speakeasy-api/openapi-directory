package openapisdk.models.operations;



public class GetJobRunResponse {
    public String contentType;
    public GetJobRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetJobRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetJobRunResponse getJobRunResponse;
    public GetJobRunResponse withGetJobRunResponse(openapisdk.models.shared.GetJobRunResponse getJobRunResponse) {
        this.getJobRunResponse = getJobRunResponse;
        return this;
    }
    public Object internalServiceException;
    public GetJobRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetJobRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetJobRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetJobRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}