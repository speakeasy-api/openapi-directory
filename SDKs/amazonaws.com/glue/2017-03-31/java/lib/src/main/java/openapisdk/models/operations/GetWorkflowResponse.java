package openapisdk.models.operations;



public class GetWorkflowResponse {
    public String contentType;
    public GetWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetWorkflowResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetWorkflowResponse getWorkflowResponse;
    public GetWorkflowResponse withGetWorkflowResponse(openapisdk.models.shared.GetWorkflowResponse getWorkflowResponse) {
        this.getWorkflowResponse = getWorkflowResponse;
        return this;
    }
    public Object internalServiceException;
    public GetWorkflowResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetWorkflowResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetWorkflowResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}