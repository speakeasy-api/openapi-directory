package openapisdk.models.operations;



public class GetWorkflowRunPropertiesResponse {
    public String contentType;
    public GetWorkflowRunPropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetWorkflowRunPropertiesResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetWorkflowRunPropertiesResponse getWorkflowRunPropertiesResponse;
    public GetWorkflowRunPropertiesResponse withGetWorkflowRunPropertiesResponse(openapisdk.models.shared.GetWorkflowRunPropertiesResponse getWorkflowRunPropertiesResponse) {
        this.getWorkflowRunPropertiesResponse = getWorkflowRunPropertiesResponse;
        return this;
    }
    public Object internalServiceException;
    public GetWorkflowRunPropertiesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetWorkflowRunPropertiesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetWorkflowRunPropertiesResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetWorkflowRunPropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}