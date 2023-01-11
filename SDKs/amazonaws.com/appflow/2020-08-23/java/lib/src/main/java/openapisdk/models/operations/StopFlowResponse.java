package openapisdk.models.operations;



public class StopFlowResponse {
    public Object conflictException;
    public StopFlowResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StopFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopFlowResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopFlowResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopFlowResponse stopFlowResponse;
    public StopFlowResponse withStopFlowResponse(openapisdk.models.shared.StopFlowResponse stopFlowResponse) {
        this.stopFlowResponse = stopFlowResponse;
        return this;
    }
    public Object unsupportedOperationException;
    public StopFlowResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}