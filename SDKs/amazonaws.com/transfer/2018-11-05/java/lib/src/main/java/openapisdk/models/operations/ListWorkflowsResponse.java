package openapisdk.models.operations;



public class ListWorkflowsResponse {
    public String contentType;
    public ListWorkflowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ListWorkflowsResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidNextTokenException;
    public ListWorkflowsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListWorkflowsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListWorkflowsResponse listWorkflowsResponse;
    public ListWorkflowsResponse withListWorkflowsResponse(openapisdk.models.shared.ListWorkflowsResponse listWorkflowsResponse) {
        this.listWorkflowsResponse = listWorkflowsResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListWorkflowsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListWorkflowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}