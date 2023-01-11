package openapisdk.models.operations;



public class DeleteFlowTemplateResponse {
    public String contentType;
    public DeleteFlowTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteFlowTemplateResponse;
    public DeleteFlowTemplateResponse withDeleteFlowTemplateResponse(java.util.Map<String, Object> deleteFlowTemplateResponse) {
        this.deleteFlowTemplateResponse = deleteFlowTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteFlowTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteFlowTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteFlowTemplateResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public DeleteFlowTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteFlowTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}