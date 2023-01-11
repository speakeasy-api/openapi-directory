package openapisdk.models.operations;



public class DeleteSystemTemplateResponse {
    public String contentType;
    public DeleteSystemTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSystemTemplateResponse;
    public DeleteSystemTemplateResponse withDeleteSystemTemplateResponse(java.util.Map<String, Object> deleteSystemTemplateResponse) {
        this.deleteSystemTemplateResponse = deleteSystemTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteSystemTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteSystemTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteSystemTemplateResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public DeleteSystemTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteSystemTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}