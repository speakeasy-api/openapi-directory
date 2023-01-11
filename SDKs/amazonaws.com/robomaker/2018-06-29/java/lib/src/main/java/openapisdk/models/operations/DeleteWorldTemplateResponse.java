package openapisdk.models.operations;



public class DeleteWorldTemplateResponse {
    public String contentType;
    public DeleteWorldTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteWorldTemplateResponse;
    public DeleteWorldTemplateResponse withDeleteWorldTemplateResponse(java.util.Map<String, Object> deleteWorldTemplateResponse) {
        this.deleteWorldTemplateResponse = deleteWorldTemplateResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteWorldTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteWorldTemplateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteWorldTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteWorldTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteWorldTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}