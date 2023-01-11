package openapisdk.models.operations;



public class ListModelsResponse {
    public Object accessDeniedException;
    public ListModelsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListModelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListModelsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListModelsResponse listModelsResponse;
    public ListModelsResponse withListModelsResponse(openapisdk.models.shared.ListModelsResponse listModelsResponse) {
        this.listModelsResponse = listModelsResponse;
        return this;
    }
    public Long statusCode;
    public ListModelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListModelsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListModelsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}