package openapisdk.models.operations;



public class DeleteFlowResponse {
    public Object conflictException;
    public DeleteFlowResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteFlowResponse;
    public DeleteFlowResponse withDeleteFlowResponse(java.util.Map<String, Object> deleteFlowResponse) {
        this.deleteFlowResponse = deleteFlowResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteFlowResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteFlowResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}