package openapisdk.models.operations;



public class GetServiceTemplateVersionResponse {
    public Object accessDeniedException;
    public GetServiceTemplateVersionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetServiceTemplateVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetServiceTemplateVersionOutput getServiceTemplateVersionOutput;
    public GetServiceTemplateVersionResponse withGetServiceTemplateVersionOutput(openapisdk.models.shared.GetServiceTemplateVersionOutput getServiceTemplateVersionOutput) {
        this.getServiceTemplateVersionOutput = getServiceTemplateVersionOutput;
        return this;
    }
    public Object internalServerException;
    public GetServiceTemplateVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetServiceTemplateVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetServiceTemplateVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetServiceTemplateVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetServiceTemplateVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}