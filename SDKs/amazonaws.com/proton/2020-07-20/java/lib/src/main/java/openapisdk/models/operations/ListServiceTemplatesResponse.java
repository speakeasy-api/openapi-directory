package openapisdk.models.operations;



public class ListServiceTemplatesResponse {
    public Object accessDeniedException;
    public ListServiceTemplatesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListServiceTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListServiceTemplatesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListServiceTemplatesOutput listServiceTemplatesOutput;
    public ListServiceTemplatesResponse withListServiceTemplatesOutput(openapisdk.models.shared.ListServiceTemplatesOutput listServiceTemplatesOutput) {
        this.listServiceTemplatesOutput = listServiceTemplatesOutput;
        return this;
    }
    public Long statusCode;
    public ListServiceTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListServiceTemplatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListServiceTemplatesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}