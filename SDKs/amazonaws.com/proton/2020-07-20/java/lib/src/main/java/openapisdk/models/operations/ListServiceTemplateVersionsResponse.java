package openapisdk.models.operations;



public class ListServiceTemplateVersionsResponse {
    public Object accessDeniedException;
    public ListServiceTemplateVersionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListServiceTemplateVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListServiceTemplateVersionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListServiceTemplateVersionsOutput listServiceTemplateVersionsOutput;
    public ListServiceTemplateVersionsResponse withListServiceTemplateVersionsOutput(openapisdk.models.shared.ListServiceTemplateVersionsOutput listServiceTemplateVersionsOutput) {
        this.listServiceTemplateVersionsOutput = listServiceTemplateVersionsOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListServiceTemplateVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListServiceTemplateVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListServiceTemplateVersionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListServiceTemplateVersionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}