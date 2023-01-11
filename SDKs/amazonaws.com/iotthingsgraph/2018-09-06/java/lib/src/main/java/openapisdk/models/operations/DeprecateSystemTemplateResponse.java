package openapisdk.models.operations;



public class DeprecateSystemTemplateResponse {
    public String contentType;
    public DeprecateSystemTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deprecateSystemTemplateResponse;
    public DeprecateSystemTemplateResponse withDeprecateSystemTemplateResponse(java.util.Map<String, Object> deprecateSystemTemplateResponse) {
        this.deprecateSystemTemplateResponse = deprecateSystemTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public DeprecateSystemTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeprecateSystemTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeprecateSystemTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeprecateSystemTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeprecateSystemTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}