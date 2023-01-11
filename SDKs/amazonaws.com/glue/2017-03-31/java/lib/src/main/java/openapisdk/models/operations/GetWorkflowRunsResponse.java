package openapisdk.models.operations;



public class GetWorkflowRunsResponse {
    public String contentType;
    public GetWorkflowRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetWorkflowRunsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetWorkflowRunsResponse getWorkflowRunsResponse;
    public GetWorkflowRunsResponse withGetWorkflowRunsResponse(openapisdk.models.shared.GetWorkflowRunsResponse getWorkflowRunsResponse) {
        this.getWorkflowRunsResponse = getWorkflowRunsResponse;
        return this;
    }
    public Object internalServiceException;
    public GetWorkflowRunsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetWorkflowRunsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetWorkflowRunsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetWorkflowRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}