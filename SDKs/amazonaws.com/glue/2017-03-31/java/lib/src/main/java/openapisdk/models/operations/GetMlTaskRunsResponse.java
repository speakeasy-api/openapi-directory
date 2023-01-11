package openapisdk.models.operations;



public class GetMlTaskRunsResponse {
    public String contentType;
    public GetMlTaskRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetMlTaskRunsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetMlTaskRunsResponse getMLTaskRunsResponse;
    public GetMlTaskRunsResponse withGetMlTaskRunsResponse(openapisdk.models.shared.GetMlTaskRunsResponse getMLTaskRunsResponse) {
        this.getMLTaskRunsResponse = getMLTaskRunsResponse;
        return this;
    }
    public Object internalServiceException;
    public GetMlTaskRunsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetMlTaskRunsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetMlTaskRunsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetMlTaskRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}