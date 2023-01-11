package openapisdk.models.operations;



public class ListEnvironmentTemplatesResponse {
    public Object accessDeniedException;
    public ListEnvironmentTemplatesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListEnvironmentTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEnvironmentTemplatesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListEnvironmentTemplatesOutput listEnvironmentTemplatesOutput;
    public ListEnvironmentTemplatesResponse withListEnvironmentTemplatesOutput(openapisdk.models.shared.ListEnvironmentTemplatesOutput listEnvironmentTemplatesOutput) {
        this.listEnvironmentTemplatesOutput = listEnvironmentTemplatesOutput;
        return this;
    }
    public Long statusCode;
    public ListEnvironmentTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListEnvironmentTemplatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListEnvironmentTemplatesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}