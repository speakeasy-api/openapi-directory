package openapisdk.models.operations;



public class GetWorkflowRunResponse {
    public String contentType;
    public GetWorkflowRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetWorkflowRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetWorkflowRunResponse getWorkflowRunResponse;
    public GetWorkflowRunResponse withGetWorkflowRunResponse(openapisdk.models.shared.GetWorkflowRunResponse getWorkflowRunResponse) {
        this.getWorkflowRunResponse = getWorkflowRunResponse;
        return this;
    }
    public Object internalServiceException;
    public GetWorkflowRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetWorkflowRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetWorkflowRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetWorkflowRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}