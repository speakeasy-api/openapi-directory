package openapisdk.models.operations;



public class ListWorkflowsResponse {
    public String contentType;
    public ListWorkflowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListWorkflowsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ListWorkflowsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListWorkflowsResponse listWorkflowsResponse;
    public ListWorkflowsResponse withListWorkflowsResponse(openapisdk.models.shared.ListWorkflowsResponse listWorkflowsResponse) {
        this.listWorkflowsResponse = listWorkflowsResponse;
        return this;
    }
    public Object operationTimeoutException;
    public ListWorkflowsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public ListWorkflowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}