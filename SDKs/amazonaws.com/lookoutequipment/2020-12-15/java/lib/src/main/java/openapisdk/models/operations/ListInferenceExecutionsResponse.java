package openapisdk.models.operations;



public class ListInferenceExecutionsResponse {
    public Object accessDeniedException;
    public ListInferenceExecutionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListInferenceExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListInferenceExecutionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListInferenceExecutionsResponse listInferenceExecutionsResponse;
    public ListInferenceExecutionsResponse withListInferenceExecutionsResponse(openapisdk.models.shared.ListInferenceExecutionsResponse listInferenceExecutionsResponse) {
        this.listInferenceExecutionsResponse = listInferenceExecutionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListInferenceExecutionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListInferenceExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListInferenceExecutionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListInferenceExecutionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}