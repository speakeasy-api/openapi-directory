package openapisdk.models.operations;



public class GetServiceTemplateResponse {
    public Object accessDeniedException;
    public GetServiceTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetServiceTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetServiceTemplateOutput getServiceTemplateOutput;
    public GetServiceTemplateResponse withGetServiceTemplateOutput(openapisdk.models.shared.GetServiceTemplateOutput getServiceTemplateOutput) {
        this.getServiceTemplateOutput = getServiceTemplateOutput;
        return this;
    }
    public Object internalServerException;
    public GetServiceTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetServiceTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetServiceTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetServiceTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetServiceTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}