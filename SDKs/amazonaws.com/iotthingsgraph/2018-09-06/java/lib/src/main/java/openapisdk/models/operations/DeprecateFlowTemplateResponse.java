package openapisdk.models.operations;



public class DeprecateFlowTemplateResponse {
    public String contentType;
    public DeprecateFlowTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deprecateFlowTemplateResponse;
    public DeprecateFlowTemplateResponse withDeprecateFlowTemplateResponse(java.util.Map<String, Object> deprecateFlowTemplateResponse) {
        this.deprecateFlowTemplateResponse = deprecateFlowTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public DeprecateFlowTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeprecateFlowTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeprecateFlowTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeprecateFlowTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeprecateFlowTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}