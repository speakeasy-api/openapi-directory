package openapisdk.models.operations;



public class GetEnvironmentTemplateVersionResponse {
    public Object accessDeniedException;
    public GetEnvironmentTemplateVersionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEnvironmentTemplateVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEnvironmentTemplateVersionOutput getEnvironmentTemplateVersionOutput;
    public GetEnvironmentTemplateVersionResponse withGetEnvironmentTemplateVersionOutput(openapisdk.models.shared.GetEnvironmentTemplateVersionOutput getEnvironmentTemplateVersionOutput) {
        this.getEnvironmentTemplateVersionOutput = getEnvironmentTemplateVersionOutput;
        return this;
    }
    public Object internalServerException;
    public GetEnvironmentTemplateVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEnvironmentTemplateVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetEnvironmentTemplateVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetEnvironmentTemplateVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetEnvironmentTemplateVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}