package openapisdk.models.operations;



public class ListEnvironmentTemplateVersionsResponse {
    public Object accessDeniedException;
    public ListEnvironmentTemplateVersionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListEnvironmentTemplateVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEnvironmentTemplateVersionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListEnvironmentTemplateVersionsOutput listEnvironmentTemplateVersionsOutput;
    public ListEnvironmentTemplateVersionsResponse withListEnvironmentTemplateVersionsOutput(openapisdk.models.shared.ListEnvironmentTemplateVersionsOutput listEnvironmentTemplateVersionsOutput) {
        this.listEnvironmentTemplateVersionsOutput = listEnvironmentTemplateVersionsOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListEnvironmentTemplateVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListEnvironmentTemplateVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListEnvironmentTemplateVersionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListEnvironmentTemplateVersionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}