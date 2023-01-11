package openapisdk.models.operations;



public class GetEnvironmentTemplateResponse {
    public Object accessDeniedException;
    public GetEnvironmentTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEnvironmentTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEnvironmentTemplateOutput getEnvironmentTemplateOutput;
    public GetEnvironmentTemplateResponse withGetEnvironmentTemplateOutput(openapisdk.models.shared.GetEnvironmentTemplateOutput getEnvironmentTemplateOutput) {
        this.getEnvironmentTemplateOutput = getEnvironmentTemplateOutput;
        return this;
    }
    public Object internalServerException;
    public GetEnvironmentTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEnvironmentTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetEnvironmentTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetEnvironmentTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetEnvironmentTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}