package openapisdk.models.operations;



public class ListFlowExecutionMessagesResponse {
    public String contentType;
    public ListFlowExecutionMessagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListFlowExecutionMessagesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListFlowExecutionMessagesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListFlowExecutionMessagesResponse listFlowExecutionMessagesResponse;
    public ListFlowExecutionMessagesResponse withListFlowExecutionMessagesResponse(openapisdk.models.shared.ListFlowExecutionMessagesResponse listFlowExecutionMessagesResponse) {
        this.listFlowExecutionMessagesResponse = listFlowExecutionMessagesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFlowExecutionMessagesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListFlowExecutionMessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFlowExecutionMessagesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}